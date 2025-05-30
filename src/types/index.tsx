export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface CharacterID extends Character {
  gender: string;
  last_seen: string;
  location: {
    dimension: string;
    id: number;
    name: string;
    residents_count: string;
    type: string;
  };
  name: string;
  origin: {
    dimension: string;
    id: number;
    name: string;
    residents_count: string;
    type: string;
  };
}

export interface CharactersData {
  characters: Character[];
  current_page: number;
  total_pages: number;
}