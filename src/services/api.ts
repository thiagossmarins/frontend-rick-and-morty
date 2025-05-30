import axios from 'axios'
import { CharactersData, CharacterID } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getAllCharacters(page = 1, name = ""): Promise<CharactersData> {
  const response = await api.get('/characters/', {
    params: { page, name }
  });
  return response.data.data
}

export async function getCharacterById(id: number): Promise<CharacterID> {
  const response = await api.get(`/characters/${id}`)
  return response.data.data.character
}

export default api