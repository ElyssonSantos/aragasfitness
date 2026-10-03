import { Check, MessageCircle } from 'lucide-react';
import './Plans.css';

export function Plans() {
  const openWhatsApp = (planName: string) => {
    const text = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} da Aragas Fitness.`);
    window.open(`https://wa.me/5579998153958?text=${text}`, '_blank');
  };

  return (
    <section id="planos" className="plans">
      <div className="container plans-container">
        
        <div className="plans-left">
          <h2 className="plans-title">
            <span className="title-black">PLANOS E</span>
            <span className="title-white">MENSALIDADES</span>
          </h2>
          <p className="plans-subtitle">
            Escolha o plano ideal para você e comece hoje mesmo!
          </p>
          <button className="btn-fale-com-agente" onClick={() => window.open('https://wa.me/5579998153958', '_blank')}>
            <MessageCircle size={18} /> FALE COM A GENTE
          </button>
        </div>

        <div className="plans-right">
          {/* Plano Básico */}
          <div className="plan-card">
            <h3 className="plan-name">BÁSICO</h3>
            <p className="plan-desc">Acesso à academia</p>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="value">89,90</span>
              <span className="period">/mês</span>
            </div>
            
            <ul className="plan-features">
              <li><Check size={18} className="check-icon" /> Musculação</li>
              <li><Check size={18} className="check-icon" /> Acesso livre</li>
              <li><Check size={18} className="check-icon" /> Horários flexíveis</li>
            </ul>
            
            <button className="plan-btn" onClick={() => openWhatsApp('Básico')}>
              QUERO ESSE
            </button>
          </div>

          {/* Plano Premium */}
          <div className="plan-card premium">
            <div className="plan-badge">MAIS ESCOLHIDO</div>
            <h3 className="plan-name">PREMIUM</h3>
            <p className="plan-desc">+ Personal Trainer</p>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="value">129,90</span>
              <span className="period">/mês</span>
            </div>
            
            <ul className="plan-features">
              <li><Check size={18} className="check-icon" /> Tudo do plano básico</li>
              <li><Check size={18} className="check-icon" /> 1 aula de personal/mês</li>
              <li><Check size={18} className="check-icon" /> Avaliação física</li>
            </ul>
            
            <button className="plan-btn btn-highlight" onClick={() => openWhatsApp('Premium')}>
              QUERO ESSE
            </button>
          </div>

          {/* Plano VIP */}
          <div className="plan-card">
            <h3 className="plan-name">VIP</h3>
            <p className="plan-desc">Treino personalizado</p>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="value">179,90</span>
              <span className="period">/mês</span>
            </div>
            
            <ul className="plan-features">
              <li><Check size={18} className="check-icon" /> Tudo do plano premium</li>
              <li><Check size={18} className="check-icon" /> Equipe ilimitada</li>
              <li><Check size={18} className="check-icon" /> Acompanhamento completo</li>
            </ul>
            
            <button className="plan-btn" onClick={() => openWhatsApp('VIP')}>
              QUERO ESSE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
