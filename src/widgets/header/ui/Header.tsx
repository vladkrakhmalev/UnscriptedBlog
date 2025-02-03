import { FC } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { useTheme } from '../../../shared/lib/theme';
import { Button } from '../../../shared/ui/button';
import SunIcon from '../../../shared/assets/icons/sun.svg'  

interface IProps {

}

export const Header: FC<IProps> = ({}) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='header'>
      <Link to="/" className="header__logo">K-Blog</Link>

      <nav className='header__nav'>
        <Link to='/' className='header__nav-link'>Home</Link>
        <Link to='/about' className='header__nav-link'>About</Link>
      </nav>

      <Button onClick={toggleTheme} icon={<SunIcon stroke='#fff'/>} />
    </div>
  );
};
