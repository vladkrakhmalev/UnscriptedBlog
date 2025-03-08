import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';
import './Modal.scss'

interface IProps {
  isOpen?: boolean
  trigger?: ReactNode
  children?: ReactNode
  onClose?: () => void
}

export const Modal: FC<IProps> = props => {
  const { 
    isOpen: isOpenDefault = false,
    trigger,
    children,
    onClose
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault)

  const handlerClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  const handlerContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    setIsOpen(isOpenDefault)
  }, [isOpenDefault])

  if (!isOpen) return

  return (
    <div className='modal'>
      {trigger && 
        <div onClick={() => setIsOpen(true)}>
          {trigger}
        </div>
      }

      <div className='modal__wrapper' onClick={handlerClose}>
        <div className='modal__container' onClick={handlerContainerClick}>
          <div className='modal__head'>
            <div className='modal__close' onClick={handlerClose}>x</div>
          </div>
          <div className='modal__body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
