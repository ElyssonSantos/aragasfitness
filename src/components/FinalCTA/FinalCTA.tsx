import { MessageCircle } from 'lucide-react';
import './FinalCTA.css';

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <div className="final-cta-overlay"></div>
        {/* Placeholder image, fallback to hero if cta_bg is not available yet */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop" 
          alt="Vem pra Aragas Fitness" 
          className="final-cta-img" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero.webp';
          }} 
        />
      </div>

      <div className="container final-cta-container">
        <div className="cta-left reveal">
          <h2 className="cta-title">
            VEM PRA<br />
            <span className="text-green">ARAGAS FITNESS</span>
          </h2>
          <p className="cta-subtitle">
            SUA MELHOR VERSÃO COMEÇA AQUI.
          </p>
        </div>

        <div className="cta-right reveal">
          <div className="cta-card">
            <div className="cta-card-header">
              <MessageCircle className="text-green" size={32} />
              <h3>FALE CONOSCO PELO WHATSAPP</h3>
            </div>
            <p>
              Tire suas dúvidas, agende uma visita e venha fazer parte da nossa família.
            </p>
            <a 
              href="https://wa.me/5579998153958" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
            >
              <MessageCircle size={24} /> CHAMAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
