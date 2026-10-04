import { InstagramIcon as InstaIcon } from '../Icons/InstagramIcon';
import './Instagram.css';

const instaPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
  { id: 2, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
  { id: 3, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
  { id: 4, image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
  { id: 5, image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
  { id: 6, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&h=600&auto=format&fit=crop', url: 'https://www.instagram.com/aragas.fitness/' },
];


export function Instagram() {
  return (
    <div className="instagram">
      <div className="instagram-header reveal">
        <p className="section-subtitle">NOSSO INSTAGRAM</p>
        <div className="instagram-title-row">
          <h2 className="section-title text-black" style={{ marginBottom: 0, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
            @ARAGAS.FITNESS
          </h2>
          <a
            href="https://www.instagram.com/aragas.fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-follow"
          >
            SEGUIR
          </a>
        </div>
      </div>

      <div className="instagram-grid reveal">
        {instaPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-item"
          >
            <img src={post.image} alt="Instagram Post" className="insta-img" loading="lazy" width="600" height="600" />
            <div className="insta-overlay">
              <InstaIcon size={32} color="#FFFFFF" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
