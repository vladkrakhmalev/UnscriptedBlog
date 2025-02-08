import { FC } from 'react';
import './ErrorPage.scss'
import { Button } from '../../../shared/ui/button';
import { useTranslation } from 'react-i18next';

export const ErrorPage: FC = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className='error-page'>
      <p>{t('Произошла непредвиденная ошибка')}</p>

      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
