import estilos from './Landing-Page.module.css';
import { useState } from 'react';
import logo from '../assets/img/logo.png';

export function LandingPage({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nome, idade });
  };

  return (
    <div className={estilos.container}>
      <section className={estilos.titulo}>
        <img src={logo} alt="Hunter x Hunter" className={estilos.logoTitulo} />
      </section>

      <section className={estilos.auraModal}>
        <div className={estilos.conteiner}>
          <p className={estilos.titulo}>Licença Hunter</p>

          <form className={estilos.formulario} onSubmit={handleSubmit}>
            <input
              className={estilos.entrada}
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              className={estilos.entrada}
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <button className={estilos.botao} type="submit">
              Enviar
            </button>
          </form>

          <div className={estilos.nav}>
            <a href="#landing" className={estilos.link}>
              Página inicial
            </a>
            <a href="#licenca" className={estilos.link}>
              Página Licença
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}