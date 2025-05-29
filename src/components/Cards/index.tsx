import { useState, useEffect } from 'react'
import { Character, CharacterID } from '../../types/getAllCharacters'
import { getAllCharacters, getCharacterById } from '../../services/api'
import * as S from './style'
import { Loading } from '../../pages/Loading'
import { Modal } from '../Modal'
import { CharacterDetails } from '../CharacterDetails'
import { useLocation } from 'react-router-dom'

export function Cards() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterID>()
    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const page = Number(params.get('page')) || 1
        const name = params.get('name') || ''

        setLoading(true)
        getAllCharacters(page, name)
            .then(data => {
                setCharacters(data)
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
                            <S.Name>{character.name}</S.Name>
                            <S.Species>{character.species}</S.Species>
                        </S.Text>
                    </S.Card>
                ))}
            </S.Container>
            {modalOpen && selectedCharacter && (
                <Modal onClose={() => setModalOpen(false)}>
                    <CharacterDetails character={selectedCharacter} />
                </Modal>
            )}
        </>
    )
}