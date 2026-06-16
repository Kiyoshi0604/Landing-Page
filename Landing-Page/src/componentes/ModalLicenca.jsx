import { useState } from 'react'
import estilos from '../componentes/ModalLicenca.module.css'

export function ModalLicenca(visivel){
    
    if (!visivel) return null

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const nen = ["Emissão", "Conjuração", "Transmutação", "Especialização", "Intensificação", "Manipulação"];

    /* ALEATORIZAR VETOR E ESCOLHER 1 ITEM
    const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
                            arredondar   aleatorio     quantidade de espacos no vetor
    const indiceAleatorio = Math.floor(Math.random() * frutas.length);
    const itemSorteado = frutas[indiceAleatorio];
    */

    const nenAleatorio = Math.floor(Math.random() * nen.length);
    const nenEscolhido = nen[nenAleatorio];

    const mostrarMensagem = () => {
        
    }

    return(
        <div className={estilos.conteiner}>

            <p className={estilos.titulo}>Licença Hunter</p>

            <div className={estilos.ModalLicenca}>
                <p className={estilos.texto}>Nome:</p>
                <p className={estilos.texto}>Idade:</p>
            </div>

            <form className={estilos.formulario}> 
                <input
                    className={estilos.entrada}
                    placeholder='Nome'
                    value={nome} 
                    onChange={(e) => setNome(event.target.value)}
                />

                <input
                    className={estilos.entrada}
                    placeholder='Idade'
                    value={idade} 
                    onChange={(e) => setIdade(event.target.value)}
                />

                <button className={estilos.botao}>Enviar</button>
                
                <p>{nome}</p>
                <p>{idade}</p>
                <p>{nenEscolhido}</p>
            </form>

        </div>
    )
}