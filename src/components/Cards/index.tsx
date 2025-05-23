import { useState, useEffect } from 'react'
import { Character } from '../../types/getAllCharacters'
import { getAllCharacters } from '../../services/api'
import { Container, Card, Image, Name, Species, Text } from './style'
import { Loading } from '../Loading'

export function Cards() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCharacters()
      .then(data => {
        setTimeout(() => {
          setCharacters(data)
          setLoading(false)
        }, 1500) // 1.5 segundos de atraso
      })
      .catch(error => {
        console.error('Erro ao buscar personagens:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

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