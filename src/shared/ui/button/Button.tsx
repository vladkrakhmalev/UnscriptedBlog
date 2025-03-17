import { FC, ReactNode, ButtonHTMLAttributes, useMemo } from 'react';
import './Button.scss'
import { clss } from '../../lib/clss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  children?: ReactNode | string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: FC<IProps> = ({ icon, children, variant = 'primary', onClick, ...rest }) => {

  const buttonClasses = useMemo(() => {
    return clss('button', { '_icon': !!icon }, `_${variant}`)
  }, [icon, variant])

  return (
    <button
      {...rest}
      className={buttonClasses}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  );
};
