import './styles/index.scss'
import { useTheme } from '../shared/lib/theme'
import { clss } from '../shared/lib/clss/clss'
import { AppRouter } from './router'
import './../shared/lib/i18n'
import { Suspense } from 'react'
import { ErrorBoundary } from '../shared/providers/error-boundary'
import { ErrorPage } from '../pages/error-page'

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={clss('app', theme)}>
      <ErrorBoundary errorComponent={<ErrorPage/>}>
        <Suspense fallback="">
          <AppRouter/>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
