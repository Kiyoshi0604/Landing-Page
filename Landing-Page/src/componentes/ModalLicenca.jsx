import estilos from '../componentes/ModalLicenca.module.css'
import licenca from "../assets/img/licenca.png"

// ERRO CORRIGIDO: Adicionar props visivel e onClose para funcionar com overlay
export function ModalLicenca({ nome, idade, nen, visivel, onClose }) {

    if (!visivel) return null

    return (
        // ERRO CORRIGIDO: Adicionar overlay que sobreponha o formulário
        <div className={estilos.overlay} onClick={onClose}>
            <div
                className={estilos.conteiner}
                style={{ backgroundImage: `url(${licenca})` }}
                onClick={(e) => e.stopPropagation()}
            >
                <span className={estilos.nome}>{nome}</span>
                <span className={estilos.idade}>{idade}</span>
                <span className={estilos.nen}>{nen}</span>

                <button
                    className={estilos.botao}
                    onClick={onClose}
                >
                    Fechar Licença
                </button>
            </div>
        </div>
    )
}