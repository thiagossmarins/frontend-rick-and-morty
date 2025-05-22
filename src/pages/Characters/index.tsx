import { Content } from './style'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Cards } from '../../components/Cards'

export function Characters() {

  return (
    <Content>
      <Header />
      <Search />
      <Cards />
    </Content>
  )
}