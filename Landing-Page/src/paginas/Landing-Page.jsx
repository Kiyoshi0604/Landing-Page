import estilos from './Landing-Page.module.css';
import { useState } from 'react';
import { ModalLicenca } from '../componentes/ModalLicenca';

export function LandingPage() {

    const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false)

    // Função para alternar a visibilidade do modal
    const exibirModal = (status) => {
        setModalMensagemVisivel(status)
    }

    // Criação do componente de navegação
    const navegacao = useNavigate()

    const autenticarUsuario = (e) => {

        // "Personalização" do modal
        setModalMensagemTitulo('Autenticação')

        if(!email || !senha){
            // "Personalização" do modal
            setModalMensagemTexto(`Por favor, informe o e-mail e senha.`)
        }else{
            // Navega para a página principal
            navegacao('principal')
        }
        
        // Exibe o modal
        exibirModal(true)
        
        e.preventDefault()
    }

    return (
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>Hunter x Hunter</h1>
            <p className={estilos.subtitulo}>João Paulo e Enzo Basso - 2 DSA</p>

            <ModalLicenca
                visivel={modalMensagemVisivel}
                exibir={() => exibirModal()}
                titulo={modalMensagemTitulo}
                texto={modalMensagemTexto}
            />
        </div>
    )
}