import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageLazy } from './pages/main-page/MainPageLazy'
import { AboutPageLazy } from './pages/about-page/AboutPageLazy'
import { Suspense } from 'react'

export const App = () => {
  
  return (
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
  )
}