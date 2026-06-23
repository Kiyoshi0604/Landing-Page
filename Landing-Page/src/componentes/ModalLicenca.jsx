import estilos from '../componentes/ModalLicenca.module.css'

// ERRO CORRIGIDO: Adicionar props visivel e onClose para funcionar com overlay
export function ModalLicenca({nome, idade, nen, visivel, onClose}){
    
    if (!visivel) return null

    return(
        // ERRO CORRIGIDO: Adicionar overlay que sobreponha o formulário
        <div className={estilos.overlay} onClick={onClose}>
            <div className={estilos.conteiner} onClick={(e) => e.stopPropagation()}>
                <h2 className={estilos.titulo}>Licença Hunter Gerada</h2>
                
                <div className={estilos.licencaInfo}>
                    <p className={estilos.label}>Nome:</p>
                    <p className={estilos.nome}>{nome}</p>
                </div>

                <div className={estilos.licencaInfo}>
                    <p className={estilos.label}>Idade:</p>
                    <p className={estilos.idade}>{idade}</p>
                </div>

                <div className={estilos.licencaInfo}>
                    <p className={estilos.label}>Tipo Nen:</p>
                    <p className={estilos.nen}>{nen}</p>
                </div>

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