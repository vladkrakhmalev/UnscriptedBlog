import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTest } from '../i18n';

export const renderWithTestTranslation = (children: ReactNode) => {

  return render(
    <I18nextProvider i18n={i18nForTest}>
      {children}
    </I18nextProvider>
  )
}