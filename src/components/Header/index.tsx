import './index.css'
import logoRickAndMorty from "../../assets/img/logo-rick-and-morty.png"

export function Header() {
  return (
    <header>
        <img src={logoRickAndMorty} alt="" />
    </header>
  )
}