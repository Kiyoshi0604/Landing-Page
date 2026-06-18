import { useEffect, useState } from 'react';
import { LandingPage } from './paginas/Landing-Page.jsx';
import { LicencaHunter } from './paginas/LicencaHunter.jsx';

function App() {
  const [page, setPage] = useState(window.location.hash.replace('#', '') || 'landing');
  const [licenca, setLicenca] = useState({ nome: '', idade: '', nen: '' });

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash.replace('#', '') || 'landing');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (nextPage) => {
    window.location.hash = nextPage;
  };

  const handleSubmit = (formData) => {
    const nenList = [
      'Emissão',
      'Conjuração',
      'Transmutação',
      'Especialização',
      'Intensificação',
      'Manipulação',
    ];
    const indiceAleatorio = Math.floor(Math.random() * nenList.length);
    setLicenca({ ...formData, nen: nenList[indiceAleatorio] });
    navigate('licenca');
  };

  return page === 'licenca' ? (
    <LicencaHunter
      nome={licenca.nome}
      idade={licenca.idade}
      nen={licenca.nen}
      onBack={() => navigate('landing')}
    />
  ) : (
    <LandingPage onSubmit={handleSubmit} />
  );
}

export default App;