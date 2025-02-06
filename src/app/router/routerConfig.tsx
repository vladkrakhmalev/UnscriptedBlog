import { IPage } from './page.dto'
import { MainPageLazy } from '../../pages/main-page'
import { AboutPageLazy } from '../../pages/about-page'

export const pages: IPage[] = [
  {
    path: '/',
    element: <MainPageLazy/>,
  },
  {
    path: '/about',
    element: <AboutPageLazy/>,
  },
]
