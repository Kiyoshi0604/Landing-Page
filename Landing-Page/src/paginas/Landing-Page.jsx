import estilos from './Landing-Page.module.css';

export function LandingPage() {
    return (
        <div className={estilos.container}>
            <h1 className={estilos.titulo}>Hunter x Hunter</h1>
            <p className={estilos.subtitulo}>João Paulo e Enzo Basso - 2 DS A</p>

            <div className={estilos.conteudoPrincipal}>
                <h2 className={estilos.auraPrincipal}>Monstros, tesouros e mistérios sem limites.</h2>
                <h3 className={estilos.aura}>Grandes tesouros e perigos aguardam os verdadeiros Caçadores.</h3>
            </div>
        </div>
    )
}