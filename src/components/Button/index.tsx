import {  StyledLink} from './style'

interface ButtonProps {
  text: string
  link: string
}

export function Button({ text, link }: ButtonProps) {
  return (
      <StyledLink to={link}>{text}</StyledLink>
  )
}