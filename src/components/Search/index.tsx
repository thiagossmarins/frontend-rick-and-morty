import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { Center, SearchInput } from './style'

export function Search({ onSearch }: { onSearch?: (query: string) => void }) {
    const [query, setQuery] = useState<string>("")
    const navigate = useNavigate();

    function handleSearch() {
        if (onSearch) {
            onSearch(query);
        }
        navigate(`?page=1&name=${encodeURIComponent(query)}`);
    }

    return (
        <Center>
            <SearchInput value={query} onChange={e => setQuery(e.target.value)} placeholder='Search characters' />
            <Button onClick={handleSearch} text='Search' />
        </Center>
    )
}