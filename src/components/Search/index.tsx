import './index.css'

export function Search() {
  return (
    <div className='search'>
        <input
          type="text"
          placeholder='Search characters' 
        />
        <button type='submit'>
          Search
        </button>
    </div>
  )
}