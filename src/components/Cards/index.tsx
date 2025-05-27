import { useState, useEffect } from 'react'
import { Characters, CharacterID } from '../../types/getAllCharacters'
import { getAllCharacters, getCharacterById } from '../../services/api'
import * as S from './style'
import { Loading } from '../Loading'
import { Modal } from '../Modal'
import { CharacterDetails } from '../CharacterDetails'

export function Cards() {
    const [characters, setCharacters] = useState<Characters[]>([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterID | null>(null)

    useEffect(() => {
        getAllCharacters()
            .then(data => {
                setCharacters(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Erro ao buscar personagens:', error)
                setLoading(false)
            })
    }, [])

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