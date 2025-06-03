import React from 'react'
import { Btn } from './style'

interface ButtonProps {
    text: string
    onClick?: () => void
    className?: string
}

export function Button({ text, onClick, className }: ButtonProps) {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && onClick) {
            onClick()
        }
    }

    return (
        <>
            <Btn type='submit' onClick={onClick} className={className} onKeyDown={handleKeyDown} tabIndex={0} >{text}</Btn>
        </>
    )
}