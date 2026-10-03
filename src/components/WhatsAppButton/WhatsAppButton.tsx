import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5579998153958" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco"
    >
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={32} color="#FFFFFF" />
      </div>
    </a>
  );
}
