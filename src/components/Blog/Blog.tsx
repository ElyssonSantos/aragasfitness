import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import './Blog.css';

export function Blog() {
  return (
    <div className="blog">
      <div className="blog-header reveal">
        <p className="section-subtitle">BLOG</p>
        <h2 className="section-title text-black">
          DICAS, NOVIDADES <br />
          <span className="text-green-dark">E MUITO MAIS</span>
        </h2>
      </div>

      <div className="blog-grid reveal">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="blog-card" style={{ textDecoration: 'none' }}>
            <div className="blog-img-wrapper">
              <img src={post.image} alt={post.title} className="blog-img" loading="lazy" />
              <div className="blog-date">{post.date}</div>
            </div>
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-link">
                Leia mais <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="blog-actions reveal">
        <a href="#todos-os-posts" className="btn-ver-tudo">
          VER TUDO <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
