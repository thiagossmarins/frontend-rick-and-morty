import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import background from '../../assets/img/background-rick-and-morty.png'
import './index.css'

export default function App() {
  return (
    <>
      <div className='background'>
        <img 
          src={background}
          alt='Background Rick And Morty'
        />
      </div>

      <div className='content'>
        <Header />

        <Search />
      </div>
    </>
  )
}