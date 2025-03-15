import { FC, MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import './Modal.scss'
import { clss } from '../../../../src/shared/lib/clss';
import { Portal } from '../../providers/portal';

interface IProps {
  isOpen?: boolean
  trigger?: ReactNode
  title?: string | ReactNode
  children?: ReactNode
  closeOnWrapper?: boolean
  onClose?: () => void
}

export const Modal: FC<IProps> = props => {
  const { 
    isOpen: isOpenDefault = false,
    trigger,
    title,
    children,
    closeOnWrapper = true,
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

  const handlerWrapperClick = () => {
    if (closeOnWrapper) handlerClose()
  }

  useEffect(() => {
    setIsOpen(isOpenDefault)
  }, [isOpenDefault])

  const headClasses = useMemo(() => {
    return clss('modal__head', {'_without-title': !title})
  }, [title])

  const wrapperClasses = useMemo(() => {
    return clss('modal__wrapper', {_open: isOpen})
  }, [isOpen])

  return (
    <div className='modal'>
      {trigger && 
        <div onClick={() => setIsOpen(true)}>
          {trigger}
        </div>
      }

      <Portal selector='#app'>
        <div className={wrapperClasses} onClick={handlerWrapperClick}>
          <div className='modal__container' onClick={handlerContainerClick}>
            <div className={headClasses}>
              <span className='modal__title'>
                {title}
              </span>
              <div className='modal__close' onClick={handlerClose}>x</div>
            </div>
            <div className='modal__body'>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};
