import React from 'react'
import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Undifined from './pages/Undifined'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
          <Route path='/detail/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='*' element={<Undifined></Undifined>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App