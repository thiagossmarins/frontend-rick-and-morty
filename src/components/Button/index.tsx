import { Btn } from './style'

interface ButtonProps {
    text: string
    onClick?: () => void
    className?: string
}

export function Button({ text, onClick, className }: ButtonProps) {
    return (
        <>
            <Btn type='submit' onClick={onClick} className={className}>{text}</Btn>
        </>
    )
}