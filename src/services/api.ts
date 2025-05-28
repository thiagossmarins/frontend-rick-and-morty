import axios from 'axios'
import { Character, CharacterID } from '../types/getAllCharacters'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getAllCharacters(page = 1, name = ""): Promise<Character[]> {
  const response = await api.get('/characters/', {
    params: { page, name }
  })
  return response.data.data.characters
}

export async function getCharacterById(id: number): Promise<CharacterID> {
  const response = await api.get(`/characters/${id}`)
  return response.data.data.character
}

export default api