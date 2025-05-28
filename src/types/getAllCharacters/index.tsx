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
    dimension: string | null;
    id: number | null;
    name: string | null;
    residents_count: string | null;
    type: string | null;
  } | null;
  name: string;
  origin: {
    dimension: string | null;
    id: number | null;
    name: string | null;
    residents_count: string | null;
    type: string | null;
  } | null;
}

export interface CharactersData {
  characters: Character[];
  current_page: number;
  total_pages: number;
}