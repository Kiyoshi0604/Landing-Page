import estilos from './Landing-Page.module.css';
import { useState } from 'react';
import { ModalLicenca } from '../componentes/ModalLicenca';
import logo from '../assets/img/logo.png';

export function LandingPage() {

    const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false);

    const [modalMensagemTitulo, setModalMensagemTitulo] = useState('');
    const [modalMensagemTexto, setModalMensagemTexto] = useState('');

    // Função para alternar a visibilidade do modal
    const exibirModal = (status) => {
        setModalMensagemVisivel(status);
    };

    // Criação do componente de navegação
    // const navegacao = useNavigate()

    const autenticarUsuario = (e) => {

        // "Personalização" do modal
        setModalMensagemTitulo('Autenticação');

        if (!email || !senha) {
            // "Personalização" do modal
            setModalMensagemTexto('Por favor, informe o e-mail e senha.');
        } else {
            // Navega para a página principal
            // navegacao('principal')
        }

        // Exibe o modal
        exibirModal(true);

        e.preventDefault();
    };

    return (
        <div className={estilos.container}>

        <section className={estilos.titulo}>
            <img
                src={logo}
                alt="Hunter x Hunter"
                className={estilos.logoTitulo}
            />
        </section>

        <section className={estilos.auraModal}>
            <ModalLicenca
                visivel={modalMensagemVisivel}
                exibir={() => exibirModal(false)}
                titulo={modalMensagemTitulo}
                texto={modalMensagemTexto}
            />
        </section>

    </div>
    );
}