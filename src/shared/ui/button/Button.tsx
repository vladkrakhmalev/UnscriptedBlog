import { FC } from 'react';
import './Button.scss'
import { clss } from '../../lib/clss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children?: React.ReactNode | string
  onClick?: () => void
}

export const Button: FC<IProps> = ({ icon, children, onClick, ...rest }) => {

  return (
    <button {...rest} className={clss('button', { '_icon': !!icon })} onClick={onClick}>
      {icon && icon}
      {children}
    </button>
  );
};
