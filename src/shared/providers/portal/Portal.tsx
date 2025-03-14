import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children?: ReactNode
  selector?: string
}

export const Portal: FC<IProps> = ({ children, selector }) => {
  const element = document.querySelector(selector) || document.body
  
  return createPortal(children, element)
};