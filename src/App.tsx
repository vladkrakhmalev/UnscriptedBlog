import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageLazy } from './pages/main-page/MainPageLazy'
import { AboutPageLazy } from './pages/about-page/AboutPageLazy'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { clss } from './utils/clss'

export const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={clss('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <BrowserRouter>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О сайте</Link>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<MainPageLazy/>} />
              <Route path='/about' element={<AboutPageLazy/>} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  )
}