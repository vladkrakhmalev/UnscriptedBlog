import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './routerConfig';

export const AppRouter: FC = () => {

  return (
    <BrowserRouter>
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
