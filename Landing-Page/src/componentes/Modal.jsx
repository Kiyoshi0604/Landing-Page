import estilos from './Modal.module.css'

// ERRO CORRIGIDO: Criar Modal funcional para exibir mensagens
export function Modal({titulo, texto, visivel, onClose}){
    
    if (!visivel) return null

    return(
        <div className={estilos.overlay} onClick={onClose}>
            <div className={estilos.conteiner} onClick={(e) => e.stopPropagation()}>
                <h2 className={estilos.titulo}>{titulo}</h2>
                <p className={estilos.texto}>{texto}</p>
                
                <button 
                    className={estilos.botao}
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    )
}
