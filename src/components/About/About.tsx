import { Play, Diamond, Zap } from 'lucide-react';
import './About.css';

export function About() {
  return (
    <section id="sobre" className="about section-padding">
      <div className="container about-container">
        <div className="about-content">
          <p className="section-subtitle reveal">SOBRE A ARAGAS FITNESS</p>
          <h2 className="section-title reveal">
            DISCIPLINA HOJE, <br />
            <span className="text-green">RESULTADOS AMANHÃ.</span>
          </h2>

          <p className="about-text reveal">
            A Aragas Fitness é mais do que uma academia, é um espaço feito para quem leva a saúde a sério. Aqui, você treina com conforto, segurança e o incentivo de profissionais que realmente se importam com seu progresso.
          </p>

          <div className="about-highlights reveal">
            <div className="highlight">
              <Diamond className="highlight-icon" />
              <span>CADA DETALHE INSPIRA.</span>
            </div>
            <div className="highlight">
              <Zap className="highlight-icon" />
              <span>CADA TREINO TRANSFORMA.</span>
            </div>
          </div>
        </div>

        <div className="about-image-wrapper reveal">
          <div className="about-image-decoration"></div>
          <img src="/images/interior.jpg" alt="Estrutura da Aragas Fitness" className="about-image" loading="lazy" width="600" height="450" />

          <div className="about-badges">
            <div className="badge">
              <strong>100%</strong>
              <span>CLIMATIZADA</span>
            </div>
            <div className="badge">
              <strong>FOCO EM</strong>
              <span>MUSCULAÇÃO</span>
            </div>
          </div>

          <a href="#equipamentos" className="btn-play">
            <span className="play-icon"><Play size={24} fill="currentColor" /></span>
            <span className="play-text">CONHEÇA NOSSA ESTRUTURA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
