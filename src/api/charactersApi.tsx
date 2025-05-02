// src/api/charactersApi.ts
import { Character } from '../types/getAllCharacters';

export const getAllCharacters = async (): Promise<Character[]> => {
  const response = await fetch('http://localhost:5000/characters/');
  
  if (!response.ok) {
    throw new Error('Erro ao buscar personagens');
  }

  const data = await response.json();
  return data;
};