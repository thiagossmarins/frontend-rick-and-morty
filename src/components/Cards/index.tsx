import { useState, useEffect } from 'react'
import { Character, CharacterID } from '../../types'
import { getAllCharacters, getCharacterById } from '../../services/api'
import * as S from './style'
import { Loading } from '../../pages/Loading'
import { Modal } from '../Modal'
import { CharacterDetails } from '../CharacterDetails'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '../Pagination'

export function Cards() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterID>()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const page = Number(params.get('page')) || 1
        const name = params.get('name') || ''

        setLoading(true)
        getAllCharacters(page, name)
            .then(data => {
                setCharacters(data.characters)
                setCurrentPage(data.current_page)
                setTotalPages(data.total_pages)
                setLoading(false)
            })
            .catch(error => {
                console.error('Erro ao buscar personagens:', error)
                setLoading(false)
            })
    }, [location.search])

    const handleCardClick = async (id: number) => {
        setLoading(true)
        try {
            const character = await getCharacterById(id)
            setSelectedCharacter(character)
            setModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar personagem:', error)
        } finally {
            setLoading(false)
        }
    }

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(location.search)
        params.set('page', String(page))
        navigate(`?${params.toString()}`)  // <- isso dispara a atualização do location
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <S.Container>
                {characters.map(character => (
                    <S.Card key={character.id} onClick={() => handleCardClick(character.id)}>
                        <S.Image
                            src={character.image}
                            status={character.status}
                        />
                        <S.Text>
                            <S.Name modal={false}>{character.name}</S.Name>
                            <S.Species>{character.species}</S.Species>
                        </S.Text>
                    </S.Card>
                ))}
            </S.Container>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            {modalOpen && selectedCharacter && (
                <Modal onClose={() => setModalOpen(false)}>
                    <S.Card modal>
                        <S.Image
                            src={selectedCharacter.image}
                            status={selectedCharacter.status}
                            modal={true}
                        />
                        <S.Text>
                            <S.Name modal={true}>{selectedCharacter.name}</S.Name>
                            <S.Species>{selectedCharacter.species}</S.Species>
                        </S.Text>
                    </S.Card>
                    <CharacterDetails character={selectedCharacter} />
                </Modal>
            )}
        </>
    )
}