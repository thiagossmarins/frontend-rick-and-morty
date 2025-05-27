import axios from 'axios'
import { Characters, CharacterID } from '../types/getAllCharacters'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getAllCharacters(): Promise<Characters[]> {
  const response = await api.get('/characters/?page=1')
  return response.data.data.characters
}

export async function getCharacterById(id: number): Promise<CharacterID> {
  const response = await api.get(`/characters/${id}`)
  return response.data.data.character
}

export default api