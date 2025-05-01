import './index.css'
import logoRickAndMorty from "../../assets/img/logo-rick-and-morty.png"

export function Header() {
  return (
    <header>
        <img 
          src={logoRickAndMorty} 
          alt="Rick And Morty Logo" 
          className='logo-rick-and-morty'
        />
    </header>
  )
}