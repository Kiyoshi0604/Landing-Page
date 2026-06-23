import { Routes, Route } from 'react-router-dom'
import {LicencaHunter} from '../paginas/LicencaHunter'
import { LandingPage } from '../paginas/Landing-Page'

// ERRO CORRIGIDO: BrowserRouter removido daqui (deve estar apenas em App.jsx)
export function Rotas() {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/licenca' element={<LicencaHunter />}/>
    </Routes>
  );
}