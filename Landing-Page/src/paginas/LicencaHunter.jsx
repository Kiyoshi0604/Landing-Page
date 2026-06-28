import estilos from './LicencaHunter.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalLicenca } from '../componentes/ModalLicenca'
import fd1 from '../assets/img/FD1.png'
import fd2 from '../assets/img/FD2.jpg'

export function LicencaHunter() {

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

  // onBack Pesquisado e e uma funcao para voltar a pagina inicial
  const onBack = () => {
    navigate('/');
  };


  const autenticarUsuario = (e) => {
    e.preventDefault();
    // Validação simples
    if (!nome || !idade) {
      alert('Por favor, informe nome e idade.');
    } else {
      // Seleciona um Nen aleatório e exibe o modal, mesmo sistema do exemplo encima
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
          <button type="submit">
            Gerar Licença
          </button>
        </form>

        {/*Usar onClick com navigate em vez de href para funcionar com React Router */}
        <button onClick={onBack} className={estilos.botao}>
          Voltar para Landing
        </button>

      </div>

      {/*Adicionar ModalLicenca para exibir a licença com overlay(sobreposicao)*/}
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