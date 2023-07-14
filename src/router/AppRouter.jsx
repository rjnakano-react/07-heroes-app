import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '.';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (

    <div className='container'>
      <Routes>

        {/* <Route path='/*' element={<HeroesRoutes />} /> */}
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path='/login' element={<LoginPage />} /> */}
        {/* <Route path='/login' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } /> */}
        <Route path='/login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        } />

      </Routes>

    </div>

  )
}
