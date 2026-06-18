import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LicencaHunter} from '../paginas/LicencaHunter'
import { LandingPage } from '../paginas/Landing-Page'

<BrowserRouter>
    <Routes>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path='licenca' element={ <LicencaHunter /> }/>
    </Routes>
</BrowserRouter>