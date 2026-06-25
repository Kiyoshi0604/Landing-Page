import estilos from './Landing-Page.module.css'
// ERRO CORRIGIDO: Importar useNavigate para funcionar com React Router
import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import h1 from '../assets/img/H1.jpeg'
import h2 from '../assets/img/H2.webp'
import h3 from '../assets/img/H3.jpg'
import h4 from '../assets/img/H4.jpg'
import h5 from '../assets/img/H5.jpg'
import h6 from '../assets/img/H6.webp'
import h7 from '../assets/img/H7.webp'
import h8 from '../assets/img/H8.webp'
import h9 from '../assets/img/H9.jpg'
import tt from '../assets/img/TT.png'
import tt2 from '../assets/img/TT2.png'
import tt3 from '../assets/img/TT3.png'

export function LandingPage() {
  // ERRO CORRIGIDO: Adicionar useNavigate para navegação com React Router
  const navigate = useNavigate();

  return (
    <div className={estilos.container}>
      <section className={estilos.inicio}>
        <img
          src={logo}
          alt="Hunter x Hunter"
          className={estilos.logoTitulo}
        />
      </section>

      <div className={estilos.estrelado}>
        <section className={estilos.historia}>
          <h1 className={estilos.tituloPrincipal}>
            <img src={tt} className={estilos.tt}></img>
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

          <div className={`${estilos.historiaItem} ${estilos.invertido}`}>
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

          <div className={`${estilos.historiaItem} ${estilos.invertido}`}>
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
              <h2>O Código de Conduta e a Origem da Trupe</h2>
              <p>
                Apesar de serem criminosos implacáveis perante o mundo, a Trupe Fantasma opera sob regras internas rígidas criadas para garantir a sobrevivência da organização acima de qualquer indivíduo, incluindo o próprio líder. Originários da Cidade do Meteoro, um local habitado por pessoas que legalmente não existem para a sociedade, os membros da Aranha compartilham um vínculo de lealdade mútua inquebrável. Decisões cruciais ou disputas internas são resolvidas através do cara ou coroa, eliminando conflitos de ego que possam ameaçar a coesão do grupo.
              </p>
            </div>
            <img src={h9} className={estilos.historiaImagem} />
          </div>

          <section className={estilos.principais}>
            <h2> <img src={tt2} className={estilos.tt}></img></h2>
            <div className={estilos.carrossel}>
              <div className={estilos.carrossel1}>

                <div className={estilos.blocos}>
                  <img src={h5} />
                  <h3>Gon Freecss</h3>
                  <p>67.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h6} />
                  <h3>Killua Zoldyck</h3>
                  <p>Exala.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h7} />
                  <h3>Kurapika</h3>
                  <p>Aurudo.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h8} />
                  <h3>Leorio</h3>
                  <p>bizarro.</p>
                </div>
                <div className={estilos.blocos}>
                  <img src={h5} />
                  <h3>Gon Freecss</h3>
                  <p>67.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h6} />
                  <h3>Killua Zoldyck</h3>
                  <p>Exala.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h7} />
                  <h3>Kurapika</h3>
                  <p>Aurudo.</p>
                </div>

                <div className={estilos.blocos}>
                  <img src={h8} />
                  <h3>Leorio</h3>
                  <p>bizarro.</p>
                </div>
              </div>
            </div>
          </section>

        </section>
        <section className={estilos.licencaModal}>
          <img src={tt3} className={`${estilos.tt} ${estilos.ttLicenca}`} />
          <div className={estilos.container2}>
            <div className={estilos.nav}>
              {/* ERRO CORRIGIDO: Usar onClick com navigate em vez de href para funcionar com React Router */}
              <a
                onClick={() => navigate('/licenca')}
                className={estilos.link}
                style={{ cursor: 'pointer' }}
              >
                Página Licença
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}