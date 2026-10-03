import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../../data/posts';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import './BlogPost.css';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('aragas-blog-theme') === 'light';
  });

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem('aragas-blog-theme', !isLightMode ? 'light' : 'dark');
  };

  if (!post) {
    return (
      <div className={`blog-post-page ${isLightMode ? 'light-mode' : ''}`}>
        <Header />
        <div className="container not-found">
          <h2>Post não encontrado</h2>
          <Link to="/" className="btn-back">
            <ArrowLeft size={20} /> Voltar para o início
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`blog-post-page ${isLightMode ? 'light-mode' : ''}`}>
      <Header />
      
      <main className="post-container container">
        <div className="post-top-bar">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Voltar
          </Link>
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Alternar modo claro e escuro"
            title="Alternar tema"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <article className="post-article">
          <header className="post-header">
            <span className="post-category">{post.category}</span>
            <h1 className="post-title text-green">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            
            <div className="post-meta">
              <div className="author-info">
                <span className="author-name">Por {post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
              
              <div className="share-buttons">
                <button aria-label="Compartilhar" className="share-btn"><Share2 size={18} /></button>
              </div>
            </div>
          </header>

          <figure className="post-image-container">
            <img src={post.image} alt={post.title} className="post-main-image" />
            <figcaption>Imagem ilustrativa - Aragas Fitness</figcaption>
          </figure>

          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <aside className="post-sidebar">
          <div className="sidebar-widget">
            <h3 className="widget-title">Últimas Notícias</h3>
            <ul className="recent-posts">
              {blogPosts.filter(p => p.id !== post.id).map(recentPost => (
                <li key={recentPost.id} className="recent-post-item">
                  <Link to={`/blog/${recentPost.id}`} className="recent-post-link">
                    <img src={recentPost.image} alt={recentPost.title} className="recent-post-thumb" />
                    <div className="recent-post-info">
                      <h4>{recentPost.title}</h4>
                      <span>{recentPost.date}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-widget call-to-action">
            <h3>Venha treinar com a gente!</h3>
            <p>Conheça nossos planos e comece hoje mesmo sua transformação.</p>
            <Link to="/#planos" className="btn-primary">Ver Planos</Link>
          </div>
        </aside>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
