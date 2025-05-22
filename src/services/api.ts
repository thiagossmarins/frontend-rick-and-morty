import axios from 'axios'
import { Character } from '../types/getAllCharacters'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getAllCharacters(): Promise<Character[]> {
  const response = await api.get('/characters/')
  return response.data.data.characters
}

export default api