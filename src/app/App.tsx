import './styles/index.scss'
import { useTheme } from '../shared/lib/theme'
import { clss } from '../shared/lib/clss/clss'
import { AppRouter } from './router'

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={clss('app', theme)}>
      <AppRouter/>
    </div>
  )
}
