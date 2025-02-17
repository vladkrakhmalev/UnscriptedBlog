import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.scss'
import { clss } from '../../lib/clss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  children?: ReactNode | string
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
