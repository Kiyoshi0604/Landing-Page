import estilos from './LicencaHunter.module.css';

export function LicencaHunter({ nome = '', idade = '', nen = '', onBack }) {
  return (
    <div className={estilos.page}>
      <div className={estilos.card}>
        <div className={estilos.cardHeader}>
          <span className={estilos.licencaBadge}>Licença Hunter</span>
        </div>

        <div className={estilos.cardContent}>
          <div className={estilos.field}>
            <span className={estilos.fieldLabel}>Nome</span>
            <span className={estilos.fieldValue}>{nome || '---'}</span>
          </div>
          <div className={estilos.field}>
            <span className={estilos.fieldLabel}>Idade</span>
            <span className={estilos.fieldValue}>{idade || '---'}</span>
          </div>
          <div className={estilos.field}>
            <span className={estilos.fieldLabel}>Nen</span>
            <span className={estilos.fieldValue}>{nen || '---'}</span>
          </div>
        </div>

        <button className={estilos.botao} onClick={onBack}>
          Voltar para landing
        </button>
      </div>
    </div>
  );
}