import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './routerConfig';
import { Header } from '../../widgets/header';

export const AppRouter: FC = () => {

  return (
    <BrowserRouter>
      <Header/>
        <Suspense fallback={<div>Loading...</div>}>
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
