import { Button } from '../Button'
import { Center, SearchInput} from './style'

export function Search() {
  return (
    <Center>
      <SearchInput placeholder='Search characters'/>
      <Button link='/characters' text='Search'/>
    </Center>
  )
}