import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon as Instagram } from '../Icons/InstagramIcon';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/images/logo-nova.png" alt="Aragas Fitness Logo" className="footer-logo-img" />
          </div>
          <p className="footer-slogan">
            Cada detalhe inspira. Cada treino transforma.
          </p>
        </div>

        <div className="footer-col">
          <h2 className="footer-title">CONTATO E LOCALIZAÇÃO</h2>
          <ul className="footer-contact">
            <li>
              <MapPin className="footer-icon" size={18} />
              <span>
                Rua A6 N67<br />
                Conjunto Augusto Franco
              </span>
            </li>
            <li>
              <Phone className="footer-icon" size={18} />
              <span>(79) 99815-3958</span>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h2 className="footer-title">NAVEGAÇÃO</h2>
          <ul className="footer-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#modalidades">Modalidades</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#equipamentos">Equipamentos</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-title">REDES SOCIAIS</h2>
          <div className="footer-socials">
            <a href="https://www.instagram.com/aragas.fitness/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={20} />
              Instagram
            </a>
            <a href="https://wa.me/5579998153958" target="_blank" rel="noopener noreferrer" className="social-link">
              <Phone size={20} />
              WhatsApp
            </a>
          </div>

          <div className="mt-4">
            <h2 className="footer-title">MAIS INFORMAÇÕES</h2>
            <a href="/trabalhe-conosco" className="social-link">
              Trabalhe conosco
            </a>
          </div>
          {/* HORÁRIO DE FUNCIONAMENTO (A DEFINIR NO FUTURO) 
          <div className="footer-hours mt-4">
            <h2 className="footer-title">HORÁRIOS</h2>
            <p>Segunda a Sexta: --:-- às --:--</p>
            <p>Sábado: --:-- às --:--</p>
          </div>
          */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2026 Aragas Fitness. Todos os direitos reservados.</p>
          {/* <p className="footer-bottom-slogan">Saúde • Disciplina • Resultados</p> */}
        </div>
      </div>
    </footer>
  );
}
