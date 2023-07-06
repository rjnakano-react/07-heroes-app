import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
      <div className='container'>
        <Routes>

          <Route path='/*' element={<HeroesRoutes />} />
          <Route path='/login' element={<LoginPage />} />


        </Routes>

      </div>
    </>
  )
}
