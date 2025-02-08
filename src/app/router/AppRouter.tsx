import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './routerConfig';
import { Header } from '../../widgets/header';
import { PageLoader } from '../../widgets/page-loader';

export const AppRouter: FC = () => {

  return (
    <BrowserRouter>
      <Header/>
      
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {pages.map(({path, element}) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
