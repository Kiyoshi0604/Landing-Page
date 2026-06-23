import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './rotas/Rotas.jsx';

// ERRO CORRIGIDO: BrowserRouter adicionado aqui (deve estar apenas no nível mais alto)
function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;