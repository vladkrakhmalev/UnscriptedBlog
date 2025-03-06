import { FC, ReactNode, useEffect, useState } from 'react';
import './Modal.scss'

interface IProps {
  isOpen?: boolean
  children?: ReactNode
}

export const Modal: FC<IProps> = ({ isOpen: isOpenDefault = false, children }) => {

  const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault)

  useEffect(() => {
    setIsOpen(isOpenDefault)
  }, [isOpenDefault])

  if (!isOpen) return

  return (
    <div className='modal'>
      <div className='modal__wrapper' onClick={() => setIsOpen(false)}>
        <div className='modal__container'>
          <div className='modal__head'>
            <div className='modal__close' onClick={() => setIsOpen(false)}>x</div>
          </div>
          <div className='modal__body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
