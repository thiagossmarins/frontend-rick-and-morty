import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/charactersApi'
import { Character } from '../../types/getAllCharacters';
import { Container, Card, Image, Name, Species, Text } from './style'

export function Cards() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getAllCharacters();
        setCharacters(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchCharacters()
  }, [])
  
  return (
    <>
      <Container>
        {characters.map(characters => (
          <Card
            key={characters.id}>
            <Image 
              src={characters.image} 
            />
            <Text>
              <Name>{characters.name}</Name>
              <Species>{characters.species}</Species>
            </Text>
          </Card>
        ))}
      </Container>
    </>
  )
}