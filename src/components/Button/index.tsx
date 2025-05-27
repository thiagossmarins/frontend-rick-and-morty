import { StyledLink } from './style'

interface ButtonProps {
  text: string
  link?: string
  onClick?: () => void
}

export function Button({ text, link, onClick }: ButtonProps) {
  return <StyledLink to={link ?? "#"} onClick={onClick}>{text}</StyledLink>
}