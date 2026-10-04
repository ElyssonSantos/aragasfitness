import { ArrowRight, ThermometerSnowflake, Zap, Users } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <video
          src="/images/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="hero-img"
        />
      </div>

      <div className="hero-content container">
        <div className="hero-text-area">
          <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
            MAIS QUE UMA ACADEMIA,<br />
            <span className="text-green">UM ESTILO DE VIDA.</span>
          </h1>
          <p className="hero-description reveal" style={{ transitionDelay: '0.2s' }}>
            Aqui você encontra estrutura, energia e o suporte certo para conquistar seus objetivos.
          </p>
          <div className="hero-cta-wrapper reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="#sobre" className="hero-cta btn-primary">
              QUERO CONHECER <ArrowRight size={20} />
            </a>
          </div>

          <div className="hero-features reveal">
            <div className="feature-icon-wrapper" data-tooltip="100% CLIMATIZADA" tabIndex={0}>
              <ThermometerSnowflake size={20} />
            </div>
            <div className="feature-icon-wrapper" data-tooltip="EQUIPAMENTOS MODERNOS" tabIndex={0}>
              <Zap size={20} />
            </div>
            <div className="feature-icon-wrapper" data-tooltip="PROFISSIONAIS QUALIFICADOS" tabIndex={0}>
              <Users size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
