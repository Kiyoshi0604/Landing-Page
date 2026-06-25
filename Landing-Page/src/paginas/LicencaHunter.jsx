import estilos from './LicencaHunter.module.css'
import { useState } from 'react'
// ERRO CORRIGIDO: Era 'react-dom', deveria ser 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// ERRO CORRIGIDO: Importar ModalLicenca para exibir a licença com os dados
import { ModalLicenca } from '../componentes/ModalLicenca'
import fd1 from '../assets/img/FD1.png'
import fd2 from '../assets/img/FD2.jpg'

export function LicencaHunter() {
  // ERRO: navigate não estava sendo importado corretamente
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nenEscolhido, setNenEscolhido] = useState('');
  const nen = ["Emissão", "Conjuração", "Transmutação", "Especialização", "Intensificação", "Manipulação"];

  /* ALEATORIZAR VETOR E ESCOLHER 1 ITEM
  const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
                          arredondar   aleatorio     quantidade de espacos no vetor
  const indiceAleatorio = Math.floor(Math.random() * frutas.length);
  const itemSorteado = frutas[indiceAleatorio];
  */

  const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false);

  // ERRO CORRIGIDO: Função onBack não estava definida
  const onBack = () => {
    navigate('/');
  };

  // ERRO CORRIGIDO: Função autenticarUsuario com lógica completa
  const autenticarUsuario = (e) => {
    e.preventDefault();
    // Validação simples
    if (!nome || !idade) {
      alert('Por favor, informe nome e idade.');
    } else {
      // ERRO CORRIGIDO: Seleciona um Nen aleatório e exibe o modal
      const nenAleatorioIndex = Math.floor(Math.random() * nen.length);
      const nenSelecionado = nen[nenAleatorioIndex];
      setNenEscolhido(nenSelecionado);
      setModalMensagemVisivel(true);
    }
  };


  return (
    <div className={estilos.page}>
      <img src={fd1} className={estilos.sup} />
      <img src={fd2} className={estilos.inf} />
      <div className={estilos.card}>
        <div className={estilos.cardHeader}>
          <span className={estilos.licencaBadge}>Licença Hunter</span>
        </div>

        {/* ERRO CORRIGIDO: Corrigi tag <forms> para <form> */}
        <form onSubmit={autenticarUsuario}>
          <input
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder='Idade'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          {/* ERRO CORRIGIDO: Adicionado submit button */}
          <button type="submit">
            Gerar Licença
          </button>
        </form>

        {/* ERRO CORRIGIDO: Usar onClick com navigate em vez de href para funcionar com React Router */}
        <button onClick={onBack} className={estilos.botao}>
          Voltar para Landing
        </button>

      </div>

      {/* ERRO CORRIGIDO: Adicionar ModalLicenca para exibir a licença com overlay */}
      <ModalLicenca
        nome={nome}
        idade={idade}
        nen={nenEscolhido}
        visivel={modalMensagemVisivel}
        onClose={() => {
          setModalMensagemVisivel(false);
          setNome('');
          setIdade('');
          setNenEscolhido('');
        }}
      />
    </div>
  );
}