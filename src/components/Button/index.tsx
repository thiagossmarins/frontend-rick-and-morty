import { Btn } from './style'

interface ButtonProps {
  text: string
  onClick?: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return <Btn type='submit' onClick={onClick}>{text}</Btn>
}