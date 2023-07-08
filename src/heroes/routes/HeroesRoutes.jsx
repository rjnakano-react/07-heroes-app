import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DCPage, MarvelPage,SearchPage,HeroPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage />}/>
            <Route path='dc' element={<DCPage />}/>
            <Route path='search' element={<SearchPage />}/>
            <Route path='hero/:id' element={<HeroPage />}/>

            {/* Search, Hero by Id */}
            
            <Route path='/' element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
