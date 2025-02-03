import { FC } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { useTheme } from '../../../shared/lib/theme';
import { Button } from '../../../shared/ui/button';
import SunIcon from '../../../shared/assets/icons/sun.svg'  
import TranslateIcon from '../../../shared/assets/icons/translate.svg'  
import { useI18n } from '../../../shared/lib/i18n';
import { useTranslation } from 'react-i18next';

export const Header: FC = () => {
  const { t } = useTranslation()
  const { toggleTheme } = useTheme()
  const { toggleLang } = useI18n()

  return (
    <div className='header'>
      <Link to="/" className="header__logo">K-Blog</Link>

      <nav className='header__nav'>
        <Link to='/' className='header__nav-link'>{t('Главная')}</Link>
        <Link to='/about' className='header__nav-link'>{t('О сайте')}</Link>
      </nav>

      <div className="header__btns">
        <Button
          icon={<SunIcon/>}
          onClick={toggleTheme}
        />
        
        <Button
          icon={<TranslateIcon/>}
          onClick={toggleLang}
        />
      </div>
    </div>
  );
};
