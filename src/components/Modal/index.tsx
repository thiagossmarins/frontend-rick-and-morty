import { Overlay, ModalContainer, ButtonWrapper } from './style'
import { Button } from '../Button'


interface ModalProps {
    onClose: () => void
    children: React.ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
    return (
        <Overlay>
            <ModalContainer>
                <ButtonWrapper>
                    <Button onClick={onClose} text='Close' className='modal-button' />
                </ButtonWrapper>
                {children}
            </ModalContainer>
        </Overlay>
    )
}