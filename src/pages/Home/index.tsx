import { BackgroundImage, Content } from './style'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import background from '../../assets/img/background-rick-and-morty.png'
import { Cards } from '../../components/Cards';

export default function App() {

  return (
    <>
      <BackgroundImage
        src={background}
        alt='Background Rick And Morty'
      />

      <Content>
        <Header />
        <Search />
        <Cards />
      </Content>
    </>
  )
}