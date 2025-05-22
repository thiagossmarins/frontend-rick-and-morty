import {GlobalStyle} from './styles/global'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/characters' element={<Characters />}  />
    </Routes>
  </BrowserRouter>,
)
