import { BoxSelect, HeartPulse, Activity, Wind } from 'lucide-react';
import './Equipment.css';

const equipments = [
  {
    id: 'maquinas',
    title: 'MÁQUINAS MODERNAS',
    image: '/images/equip_maquinas.webp',
    icon: BoxSelect,
    className: 'equip-large'
  },
  {
    id: 'cardio',
    title: 'CARDIO',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&h=800&auto=format&fit=crop',
    icon: HeartPulse,
    className: 'equip-small'
  },
  {
    id: 'funcional',
    title: 'TREINO FUNCIONAL',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&h=800&auto=format&fit=crop',
    icon: Activity,
    className: 'equip-small'
  },
  {
    id: 'ambiente',
    title: 'AMBIENTE CLIMATIZADO',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&h=800&auto=format&fit=crop',
    icon: Wind,
    className: 'equip-wide'
  }
];

export function Equipment() {
  return (
    <section id="equipamentos" className="equipment section-padding">
      <div className="container">
        <p className="section-subtitle reveal">ESTRUTURA</p>
        <h2 className="section-title reveal">
          EQUIPAMENTOS DE <br />
          <span className="text-green">ALTO NÍVEL</span>
        </h2>
        <p className="equipment-text reveal">
          Tecnologia, variedade e manutenção em dia para você treinar com total segurança.
        </p>

        <div className="equipment-gallery reveal">
          {equipments.map((eq) => {
            const Icon = eq.icon;
            return (
              <div key={eq.id} className={`equipment-item ${eq.className}`}>
                <img src={eq.image} alt={eq.title} className="equipment-img" loading="lazy" />
                <div className="equipment-overlay">
                  <div className="equipment-content">
                    <Icon className="equipment-icon" size={32} />
                    <h3 className="equipment-title">{eq.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
