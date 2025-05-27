import { Container } from './style'
import logoRickAndMorty from "../../assets/img/logo.png"

export function Header() {
  return (
    <Container>
      <img
        src={logoRickAndMorty}
        alt="Rick And Morty Logo"
        className='logo-rick-and-morty'
      />
    </Container>
  )
}