import { FC } from 'react';
import './Button.scss'

interface IProps {
  onClick?: () => void
  children?: React.ReactNode | string
}

export const Button: FC<IProps> = ({ onClick, children }) => {

  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};
