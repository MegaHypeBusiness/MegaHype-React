import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

// Componentes de página
function Home({ heroRef, servicesRef }) {
  // Mensagem de confirmação do formulário
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Navegação suave
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, window.location.pathname);
    }
  };

  // Scroll top
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Efeito para mostrar botão scroll-top
  useEffect(() => {
    const scrollBtn = document.querySelector('.scroll-top');
    const onScroll = () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Funções para abrir links externos
  const openLink = (url) => window.open(url, '_blank');

  // Função para enviar formulário (apenas exibe confirmação)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      e.target.reset();
    }, 3000);
  };

  // Função para abrir e-mail de suporte
  const handleSupportEmail = (e) => {
    e.preventDefault();
    const subject = 'Estou com um problema';
    const body = 'Olá,\n\nEstou entrando em contato porque estou com um problema. Abaixo estão os detalhes:\n\n';
    window.location.href = `mailto:megahypebusiness@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Header */}
      <section id="hero-area" className="header-area header-eight" ref={heroRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-content">
                <h1>MegaHype</h1>
                <p>
                  Nessa empresa, o sucesso dos nossos clientes é a nossa principal missão. Com uma equipe apaixonada e criativa, dedicamos nosso talento para transformar visões em realidade, criando conteúdos impactantes que elevam marcas e emocionam audiências. Juntos, vamos além, sempre em busca dos melhores resultados.
                </p>
                <div className="button">
                  <a href="#services" className="btn primary-btn" onClick={e => { e.preventDefault(); scrollToSection(servicesRef); }}>Serviços</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-image">
                <img src="/images/pexels.jpg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section de serviços (Nosso DNA) igual ao HTML original */}
      <section id="services" className="services-area services-eight" ref={servicesRef}>
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h6>Serviços</h6>
                  <h2 className="fw-bold">O Nosso DNA</h2>
                  <p>
                    Oferecemos diversos serviços para atender as necessidades dos nossos clientes. Criamos a identidade do produto da forma em que o cliente deseja. Clique no Ícone para ver um exemplo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Thumbnail */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://nevesntc.tumblr.com')} style={{cursor:'pointer'}}>
                  {/* SVG Thumbnail */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Thumbnail</h4>
                  <p>
                    Oferecemos miniaturas personalizadas e modernas para o seu canal no YouTube. Transformamos suas ideias em imagens atraentes e informativas, que são a primeira impressão do seu vídeo. Nossas miniaturas ajudam você a se destacar e a capturar a atenção dos espectadores, garantindo uma apresentação visual de alta qualidade.
                  </p>
                </div>
              </div>
            </div>
            {/* Vídeos para Youtube */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://youtube.com/playlist?list=PLpovQk6bHNPbC0OT6DVPfCVK1gOxMhB0z&si=ruWGWmbgWGQqiBqT')} style={{cursor:'pointer'}}>
                  {/* SVG Youtube */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Vídeos para Youtube</h4>
                  <p>
                    Oferecemos produção de vídeos de alta qualidade para o seu canal no YouTube. Transformamos suas ideias em conteúdo visual envolvente e profissional, ajudando você a se destacar e engajar sua audiência. Seja para vlogs, gameplays ou outros tipos de conteúdo, garantimos produtos excepcionais que elevam a qualidade do seu canal e atraem mais visualizações.
                  </p>
                </div>
              </div>
            </div>
            {/* Curtos */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://drive.google.com/drive/folders/1ZEMzAugTt5dznmmLHshWU5llUyOG6eyq?usp=sharing')} style={{cursor:'pointer'}}>
                  {/* SVG Curtos */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Curtos</h4>
                  <p>
                    Produzimos vídeos curtos e dinâmicos com até 59 segundos. Transformamos suas ideias em conteúdos impactantes e envolventes, ideais para engajar seu público e promover sua marca nas redes sociais. Com nossa produção, você consegue criar vídeos marcantes que aumentam a visibilidade e atraem mais atenção.
                  </p>
                </div>
              </div>
            </div>
            {/* Reels */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://drive.google.com/drive/folders/1o16BPDBLrFwq1z7UICDd8wewQrcKMIns?usp=sharing')} style={{cursor:'pointer'}}>
                  {/* SVG Reels */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Reels</h4>
                  <p>
                    Produzimos vídeos curtos e envolventes para Reels, com qualquer duração. Criamos conteúdos dinâmicos e cativantes que capturam a atenção e ajudam a promover sua marca de forma eficaz. Nosso objetivo é destacar sua presença digital com vídeos impactantes e inovadores.
                  </p>
                </div>
              </div>
            </div>
            {/* Casamentos e Festas */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://youtube.com/playlist?list=PLpovQk6bHNPaBppVGUG0BfrIq0owv4hoQ&si=s42Gpuo0ANoaVDKG')} style={{cursor:'pointer'}}>
                  {/* SVG Casamento */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Casamentos e Festas</h4>
                  <p>
                    Somos especialistas na edição de vídeos de casamento e festas de 15 anos. Transformamos suas gravações em filmes emocionantes e memoráveis, destacando os momentos mais especiais do seu evento. Nossa equipe combina sensibilidade e técnica para criar uma narrativa envolvente, garantindo que cada detalhe e emoção sejam exibidos de forma única.
                  </p>
                </div>
              </div>
            </div>
            {/* Trailer */}
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="service-icon" onClick={() => openLink('https://youtube.com/playlist?list=PLpovQk6bHNPb7-bDpwrHOmVGfwcVahGce&si=hhjVNzM6X3eK9rPq')} style={{cursor:'pointer'}}>
                  {/* SVG Trailer */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                  </svg>
                </div>
                <div className="service-content">
                  <h4>Trailer</h4>
                  <p>
                    Editamos trailers impactantes que destacam os pontos fortes do seu evento ou projeto. Com uma edição criativa e dinâmica, produzimos teasers envolventes que capturam a essência e despertam o interesse do seu público-alvo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Apps() {
  return (
    <section className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Softwares</h6>
                <h2>Utilitários & Apps</h2>
                <p>Baixe gratuitamente nossos utilitários exclusivos para Windows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards de software */}
      <div className="container">
        <div className="row">
          {/* Card do Conversor de Vídeos */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" style={{cursor:'default'}}>
                <i className="lni lni-video" style={{color: '#ffe066', fontSize: 40}}></i>
              </div>
              <div className="service-content">
                <h4>Conversor de Vídeos</h4>
                <p>Converta vídeos para diversos formatos de forma simples e rápida.</p>
                <a
                  href="/conversor-de-video-setup.exe"
                  download
                  className="btn primary-btn mt-3"
                  style={{
                    background: '#000',
                    color: '#fff',
                    border: '2px solid #fff',
                    borderRadius: '12px',
                    padding: '10px 28px',
                    fontSize: '1.1rem',
                    fontFamily: 'Anton, sans-serif',
                    transition: 'background 0.2s, color 0.2s, border 0.2s',
                  }}
                  onMouseOver={e => {
                    e.target.style.background = '#ffe066';
                    e.target.style.color = '#000';
                    e.target.style.border = '2px solid #ffe066';
                  }}
                  onMouseOut={e => {
                    e.target.style.background = '#000';
                    e.target.style.color = '#fff';
                    e.target.style.border = '2px solid #fff';
                  }}
                >
                  <i className="lni lni-download" style={{marginRight: 8}}></i>
                  Baixar .exe
                </a>
                <div style={{fontSize: '0.95rem', opacity: 0.7, marginTop: 8}}>Compatível com Windows 10/11</div>
              </div>
            </div>
          </div>
          {/* Espaço para futuros softwares: basta duplicar o card acima */}
        </div>
      </div>
    </section>
  );
}

function PortfolioImagens() {
  return (
    <section className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Portfólio</h6>
                <h2>Imagens & Thumbnails</h2>
                <p>Exemplos de thumbnails e imagens criadas para clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards de serviço relacionados a imagens/thumbnails */}
      <div className="container">
        <div className="row">
          {/* Thumbnail */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://nevesntc.tumblr.com', '_blank')} style={{cursor:'pointer'}}>
                {/* SVG Thumbnail */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
              <div className="service-content">
                <h4>Thumbnail</h4>
                <p>Miniaturas personalizadas e modernas para o seu canal no YouTube.</p>
              </div>
            </div>
          </div>
          {/* ...adicione outros cards de imagens se quiser... */}
        </div>
      </div>
    </section>
  );
}

function PortfolioVideos() {
  return (
    <section className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Portfólio</h6>
                <h2>Vídeos</h2>
                <p>Exemplos de vídeos: Reels, Curtos, Longos, Casamentos, Trailers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards de serviço relacionados a vídeos */}
      <div className="container">
        <div className="row">
          {/* Reels */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://drive.google.com/drive/folders/1o16BPDBLrFwq1z7UICDd8wewQrcKMIns?usp=sharing', '_blank')} style={{cursor:'pointer'}}>
                {/* SVG Reels */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </div>
              <div className="service-content">
                <h4>Reels</h4>
                <p>Vídeos curtos e envolventes para Reels, com qualquer duração.</p>
              </div>
            </div>
          </div>
          {/* ...adicione outros cards de vídeos (curtos, longos, casamentos, trailers)... */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  // Função para rolar até a seção de serviços ao clicar no logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    const section = document.querySelector('#services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, window.location.pathname);
    }
  };
  // Função para abrir e-mail de suporte
  const handleSupportEmail = (e) => {
    e.preventDefault();
    const subject = 'Estou com um problema';
    const body = 'Olá,\n\nEstou entrando em contato porque estou com um problema. Abaixo estão os detalhes:\n\n';
    window.location.href = `mailto:megahypebusiness@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <footer className="footer-area footer-eleven">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-widget f-about">
                  <div className="logo">
                    <img src="/images/megahype2.jpg" alt="MegaHype Image" id="logoImage" style={{cursor: 'pointer'}} onClick={handleLogoClick} />
                  </div>
                  <p>
                    Buscando sempre o melhor para o cliente ficar sempre satisfeito. O cliente é a nossa prioridade.
                  </p>
                  <p className="copyright-text">
                    <span>© 2024 Megahype</span>
                    <a href="javascript:void(0)" rel="nofollow"></a>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="footer-widget f-link">
                  <h5>Redes Sociais</h5>
                  <ul>
                    <li><a href="https://www.instagram.com/megahype_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/megahype" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="footer-widget f-link">
                  <h5>Suporte</h5>
                  <ul>
                    <li><a href="#" onClick={handleSupportEmail}>Email</a></li>
                    <li><a href="https://drive.google.com/drive/folders/1ahZAuneOJGRtZUF0lCERxEUIc3q39Gkt?usp=sharing" target="_blank" rel="noopener noreferrer">Media Kit</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.nav-item.dropdown')) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* Navbar com sub-menu minimalista controlado por React */}
      <section className="navbar-area navbar-nine">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/" onClick={e => { e.preventDefault(); navigate('/'); }}>
                  <img className="megahype" src="/images/megahype.png" alt="Logo" />
                </Link>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                  <ul className="navbar-nav me-auto align-items-center">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Início</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/apps">Softwares</NavLink>
                    </li>
                    <li className={"nav-item dropdown" + (dropdownOpen ? " show" : "")}
                        style={{position:'relative'}}>
                      <button
                        className="nav-link dropdown-toggle"
                        id="portfolioDropdown"
                        style={{cursor:'pointer', background:'none', border:'none', color:'#fff', padding:'8px 16px'}}
                        aria-expanded={dropdownOpen}
                        onClick={() => setDropdownOpen(open => !open)}
                        type="button"
                      >
                        Portfólio
                      </button>
                      <ul
                        className={"dropdown-menu" + (dropdownOpen ? " show" : "")}
                        aria-labelledby="portfolioDropdown"
                        style={{background:'#000', border:'1px solid #fff', minWidth:'160px', padding:'0', position:'absolute', top:'100%', left:0, zIndex:1000}}
                      >
                        <li><NavLink className="dropdown-item" to="/portfolio-imagens" style={{color:'#fff', background:'none'}} onClick={()=>setDropdownOpen(false)}>Imagens</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/portfolio-videos" style={{color:'#fff', background:'none'}} onClick={()=>setDropdownOpen(false)}>Vídeos</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Rotas SPA */}
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} servicesRef={servicesRef} />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/portfolio-imagens" element={<PortfolioImagens />} />
        <Route path="/portfolio-videos" element={<PortfolioVideos />} />
      </Routes>

      <Footer />
      {/* Scroll Top Button igual ao original */}
    </>
  );
}

export default App;
