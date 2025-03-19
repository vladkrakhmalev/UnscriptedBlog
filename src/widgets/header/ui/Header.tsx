import { FC } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { useTheme } from '../../../shared/lib/theme';
import { Button } from '../../../shared/ui/button';
import SunIcon from '../../../shared/assets/icons/sun.svg'  
import TranslateIcon from '../../../shared/assets/icons/translate.svg'  
import LoginIcon from '../../../shared/assets/icons/login.svg'  
import { useI18n } from '../../../shared/lib/i18n';
import { useTranslation } from 'react-i18next';
import { Modal } from '../../../shared/ui/modal';

export const Header: FC = () => {
  const { t } = useTranslation()
  const { toggleTheme } = useTheme()
  const { toggleLang } = useI18n()

  return (
    <div className='header'>
      <Link to="/" className="header__logo">Unscripted blog</Link>

      <nav className='header__nav'>
        <Link to='/' className='header__nav-link'>{t('Главная')}</Link>
        <Link to='/about' className='header__nav-link'>{t('О сайте')}</Link>
      </nav>

      <div className="header__btns">
        <Button
          icon={<SunIcon/>}
          variant='secondary'
          onClick={toggleTheme}
        />
        
        <Button
          icon={<TranslateIcon/>}
          variant='secondary'
          onClick={toggleLang}
        />

        <Modal trigger={<Button icon={<LoginIcon/>}>{t('Войти')}</Button>}>
          Модальное окно для формы входа и регистрации
        </Modal>
      </div>
    </div>
  );
};
