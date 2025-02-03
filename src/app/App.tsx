import './styles/index.scss'
import { useTheme } from '../shared/lib/theme'
import { clss } from '../shared/lib/clss/clss'
import { AppRouter } from './router'
import './../shared/lib/i18n'
import { Suspense } from 'react'

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={clss('app', theme)}>
      <Suspense fallback="">
        <AppRouter/>
      </Suspense>
    </div>
  )
}
