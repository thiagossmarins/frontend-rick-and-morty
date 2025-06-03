import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { Center, SearchInput } from './style'

export function Search({ onSearch }: { onSearch?: (query: string) => void }) {
    const [query, setQuery] = useState<string>("")
    const navigate = useNavigate();

    function handleSearch(e: FormEvent) {
        e.preventDefault();

        if (onSearch) {
            onSearch(query);
        }
        navigate(`/characters/?page=1&name=${encodeURIComponent(query)}`);
    }

    return (
        <Center>
            <form onSubmit={handleSearch}>
                <SearchInput value={query} onChange={e => setQuery(e.target.value)} placeholder='Search characters' />
                <Button text='Search' />
            </form>
        </Center>
    )
}