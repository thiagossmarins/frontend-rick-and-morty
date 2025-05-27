import * as S from './styles';
import { CharacterID } from '../../types/getAllCharacters'
import { getGender } from '../../utils/functions'

interface CharacterDetailsProps {
  character: CharacterID
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
        <>
            <S.ImageBackground image={character.image} />
                <S.Box>
                    <S.Content>
                        <S.PreTitle>About</S.PreTitle>
                        <S.SubTitle>{character.name} is a {character.gender} {character.species}. 
                            {getGender(character.gender)} is {character.status} and well. 
                            Last seen in {character.last_seen}
                        </S.SubTitle>
                    </S.Content>

                    <S.Content>
                        <S.PreTitle>Origin</S.PreTitle>
                        <S.Planet>Planet</S.Planet>
                        <S.Title>{character.origin?.name || 'Unknown'}</S.Title>
                        <S.SubTitle>Replacement Dimension</S.SubTitle>
                        <S.Residents> {character.origin?.residents_count ?? 0} residents</S.Residents>
                    </S.Content>
                    
                    <S.Content>
                        <S.PreTitle>Location</S.PreTitle>
                        <S.Planet>Planet</S.Planet>
                        <S.Title>{character.location?.name || 'Unknown'}</S.Title>
                        <S.SubTitle>Replacement Dimension</S.SubTitle>
                        <S.Residents> {character.location?.residents_count ?? 0} residents</S.Residents>
                    </S.Content>
                </S.Box>
        </>
  );
}