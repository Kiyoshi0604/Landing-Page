import estilos from './Landing-Page.module.css';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import h1 from '../assets/img/H1.jpeg';
import h2 from '../assets/img/H2.webp';
import h3 from '../assets/img/H3.jpg';
import h4 from '../assets/img/H4.jpg';
import h5 from '../assets/img/H5.webp';
import h6 from '../assets/img/H6.webp';
import h7 from '../assets/img/H7.webp';
import h8 from '../assets/img/H8.webp';
import h9 from '../assets/img/H9.webp';

export function LandingPage({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nome, idade });
  };

  return (
    <div className={estilos.container}>
      <section className={estilos.sigma}>
        <img
          src={logo}
          alt="Hunter x Hunter"
          className={estilos.logoTitulo}
        />
      </section>

      <section className={estilos.historia}>
        <h1 className={estilos.tituloPrincipal}>
          Manual do Hunter
        </h1>
        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>Associação Hunter e o Exame</h2>
            <p>
              O mundo de Hunter x Hunter possui uma organização global chamada Associação Hunter, que licencia profissionais para explorar territórios desconhecidos, caçar tesouros e rastrear criminosos perigosos. O distintivo obtido após o Exame Hunter concede acesso a áreas restritas e fundos quase ilimitados, tornando o teste um dos eventos mais concorridos e mortais do planeta.
            </p>
          </div>
          <img src={h1} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>O Continente Sombrio e o Novo Mundo</h2>
            <p>
              Além do continente conhecido onde a maior parte da história se passa, existe o Continente Sombrio, uma vasta área inexplorada e proibida que circunda o mundo habitado. Este local é a origem de ameaças catastróficas, conhecidas como as Cinco Grandes Calamidades, e serve como o cenário para os eventos mais recentes da história no mangá, onde diversas facções políticas e caçadores disputam a sobrevivência em uma expedição de alto risco.
            </p>
          </div>
          <img src={h2} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>A Dinastia de Assassinos Zoldyck</h2>
            <p>
              A família Zoldyck opera como uma empresa familiar de assassinos de elite a partir da montanha Kukuroo. Cada membro é treinado desde a infância para resistir a venenos, torturas e eletricidade, possuindo uma força física sobre-humana. A dinâmica interna da família é complexa, misturando um controle abusivo sobre Killua com uma distorcida forma de afeto e orgulho por suas habilidades assassinas.
            </p>
          </div>
          <img src={h3} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>A Biologia das Formigas Quimeras</h2>
            <p>
              As Formigas Quimeras funcionam através de um sistema de castas biológicas liderado por uma rainha cujo único propósito é dar à luz o Rei. Elas possuem a capacidade de herdar características genéticas das criaturas que consomem, o que resultou em uma geração de híbridos com inteligência humana e habilidades Nen avassaladoras, culminando na criação da Guarda Real e do monarca Meruem.
            </p>
          </div>
          <img src={h4} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>Gon Freecss</h2>
            <p>
              Nascido e criado na Ilha da Baleia, Gon possui sentidos extraordinariamente aguçados que rivalizam com os de animais selvagens. Sua capacidade de se camuflar, rastrear presas e entender o comportamento de criaturas da floresta moldou seu estilo de combate intuitivo. Essa profunda ligação com o mundo natural faz com que ele encare desafios complexos com uma lógica pura e direta, muitas vezes surpreendendo adversários que dependem apenas de estratégias convencionais.
            </p>
          </div>
          <img src={h5} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>Killua</h2>
            <p>
              Como herdeiro principal dos Zoldyck, Killua foi submetido a um regime de treinamento desumano desde os seus primeiros anos de vida. Ele aprendeu técnicas de ocultação de presença, manipulação de juntas corporais e transformação de suas unhas em garras afiadas. No entanto, o aspecto mais profundo de seu passado reside nos gatilhos psicológicos implantados por sua família, especificamente uma agulha hipnótica que o forçava a fugir de batalhas difíceis, um bloqueio mental que ele precisa superar para proteger seus amigos.
            </p>
          </div>
          <img src={h6} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>Kurapika</h2>
            <p>
              A busca de Kurapika pelos olhos escarlates de seu clã moldou toda a sua existência e determinou a criação de suas habilidades específicas. Suas correntes de Nen não são armas comuns, cada anel em seus dedos possui uma função distinta voltada para capturar, interrogar ou curar. Para alcançar o poder necessário para enfrentar oponentes formidáveis, ele impôs a si mesmo uma restrição de vida ou morte, selando um pacto que limita o uso de suas técnicas mais devastadoras exclusivamente contra os membros da organização que chacinou seu povo.
            </p>
          </div>
           <img src={h7} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>Leorio</h2>
            <p>
              Aparentemente motivado apenas por dinheiro e status no início de sua jornada, Leorio esconde um passado doloroso marcado pela perda de seu melhor amigo, que faleceu devido a uma doença tratável que eles não tinham condições de financiar. Essa tragédia pessoal é a força motriz que o impulsiona a enfrentar o Exame Hunter e as dificuldades acadêmicas da medicina. Mesmo não possuindo o mesmo nível de habilidades de combate de seus companheiros, sua lealdade inabalável e senso de justiça o tornam o pilar emocional do grupo.
            </p>
          </div>
          <img src={h8} className={estilos.historiaImagem} />
        </div>

        <div className={estilos.historiaItem}>
          <div className={estilos.historiaTexto}>
            <h2>O Código de Conduta e a Origem da Trupe</h2>
            <p>
              Apesar de serem criminosos implacáveis perante o mundo, a Trupe Fantasma opera sob regras internas rígidas criadas para garantir a sobrevivência da organização acima de qualquer indivíduo, incluindo o próprio líder. Originários da Cidade do Meteoro, um local habitado por pessoas que legalmente não existem para a sociedade, os membros da Aranha compartilham um vínculo de lealdade mútua inquebrável. Decisões cruciais ou disputas internas são resolvidas através do cara ou coroa, eliminando conflitos de ego que possam ameaçar a coesão do grupo.
            </p>
          </div>
           <img src={h9} className={estilos.historiaImagem} />
        </div>

      </section>
      <section className={estilos.auraModal}>
        <div className={estilos.containerBeta}>
          <h1 className={estilos.tituloTexto}>
            Licença Hunter
          </h1>

          <form
            className={estilos.formulario}
            onSubmit={handleSubmit}
          >
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

            <button
              className={estilos.botao}
              type="submit"
            >
              Enviar
            </button>
          </form>

          <div className={estilos.nav}>
            <a href="#landing" className={estilos.link}>
              Página Inicial
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