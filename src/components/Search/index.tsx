import { SearchBtns } from './style'

export function Search() {
  return (
    <SearchBtns>
        <input
          type="text"
          placeholder='Search characters' 
        />
        <button type='submit'>
          Search
        </button>
    </SearchBtns>
  )
}