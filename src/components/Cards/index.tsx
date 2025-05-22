import { useState, useEffect } from 'react'
import { Character } from '../../types/getAllCharacters'
import { getAllCharacters } from '../../services/api'
import { Container, Card, Image, Name, Species, Text } from './style'

export function Cards() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getAllCharacters()
      .then(setCharacters)
      .catch(error => {
        console.error('Erro ao buscar personagens:', error)
      })
  }, [])

  return (
    <Container>
      {characters.map(character => (
        <Card key={character.id}>
          <Image
            src={character.image}
            status={character.status}
          />
          <Text>
            <Name>{character.name}</Name>
            <Species>{character.species}</Species>
          </Text>
        </Card>
      ))}
    </Container>
  )
}