import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='not-found-page'>
      {t('Страница не найдена')}
    </div>
  );
};
