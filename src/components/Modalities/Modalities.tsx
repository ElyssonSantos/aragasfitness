import { Dumbbell, Flame, Activity, Users, UserCheck } from 'lucide-react';
import './Modalities.css';

const modalitiesData = [
  {
    id: 'musculacao',
    title: 'MUSCULAÇÃO',
    desc: 'Ganhe força, saúde e autoestima.',
    icon: Dumbbell
  },
  {
    id: 'emagrecimento',
    title: 'EMAGRECIMENTO',
    desc: 'Queime calorias e alcance seu objetivo.',
    icon: Flame
  },
  {
    id: 'hipertrofia',
    title: 'HIPERTROFIA',
    desc: 'Mais massa muscular e definição.',
    icon: Activity
  },
  {
    id: 'funcional',
    title: 'FUNCIONAL',
    desc: 'Mais mobilidade, força e resistência.',
    icon: Users
  },
  {
    id: 'personal',
    title: 'PERSONAL TRAINER',
    desc: 'Treino personalizado com acompanhamento profissional.',
    icon: UserCheck
  }
];

export function Modalities() {
  return (
    <section id="modalidades" className="modalities section-padding">
      <div className="container">
        <p className="section-subtitle reveal">MODALIDADES</p>
        <h2 className="section-title reveal">
          TREINE DO SEU <span className="text-green">JEITO</span>
        </h2>
        <p className="modalities-text reveal">
          Aqui você encontra diferentes modalidades para todos os objetivos, do iniciante ao avançado.
        </p>

        <div className="modalities-grid reveal">
          {modalitiesData.map((mod, index) => {
            const Icon = mod.icon;
            
            return (
              <div 
                key={mod.id} 
                className={`modality-card reveal`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="modality-icon-wrapper">
                  <Icon className="modality-icon" size={56} />
                </div>
                <h3 className="modality-title">{mod.title}</h3>
                <div className="modality-desc-wrapper">
                  <p className="modality-desc">{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
