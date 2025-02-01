import { MainPageLazy } from '../../pages/main-page'
import { AboutPageLazy } from '../../pages/about-page'

export const pages = [
  {
    path: '/',
    element: <MainPageLazy/>,
  },
  {
    path: '/about',
    element: <AboutPageLazy/>,
  },
]
