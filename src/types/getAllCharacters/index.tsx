export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface CharactersData {
  characters: Character[];
  current_page: number;
  total_pages: number;
}