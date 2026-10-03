import { Blog } from '../Blog/Blog';
import { Instagram } from '../Instagram/Instagram';
import './MediaSection.css';

export function MediaSection() {
  return (
    <section id="blog" className="media-section section-padding">
      <div className="container media-container">
        <div className="media-blog">
          <Blog />
        </div>
        <div className="media-insta">
          <Instagram />
        </div>
      </div>
    </section>
  );
}
