import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import { useForm, ValidationError } from '@formspree/react';
import VideoBackground from './VideoBackground';

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
                  <a href="#about" className="btn primary-btn" onClick={e => { e.preventDefault(); scrollToSection(servicesRef); }}>Conheça Mais</a>
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



      {/* Seção de Depoimentos */}
      <section id="about" className="services-area services-eight" ref={servicesRef} style={{ padding: '40px 0 30px 0' }}>
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content" style={{marginBottom: 20}}>
                  {/* <h6 style={{ color: '#00d4d7', textAlign: 'center', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>Depoimentos</h6> */}
                  <h2 className="fw-bold" style={{marginBottom: 10, textAlign: 'center', color: '#fff'}}>Depoimentos</h2>
                  <p style={{marginBottom: 0}}>
                    Conheça a experiência de alguns clientes que confiaram no MegaHype para seus projetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Depoimento 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card" style={{
                backgroundColor: '#fff',
                color: '#222',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                marginBottom: '30px',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.5rem'
                }}>
                  "
                </div>
                <div style={{ marginTop: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>
                    "A qualidade das edições do MegaHype elevou o nível das minhas gameplays. O resultado ficou muito acima do esperado, com cortes precisos e efeitos que valorizam cada jogada. Recomendo para quem busca profissionalismo no conteúdo de games!"
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className="lni lni-user" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: '0', color: '#222' }}>Italo Mortari</h5>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Criador de Conteúdo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card" style={{
                backgroundColor: '#fff',
                color: '#222',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                marginBottom: '30px',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.5rem'
                }}>
                  "
                </div>
                <div style={{ marginTop: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>
                    "Os documentários do nosso canal ganharam uma nova vida com a edição do MegaHype. A qualidade visual e narrativa ficou impecável, transmitindo exatamente a mensagem que queríamos. Trabalho de alto nível!"
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className="lni lni-user" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: '0', color: '#222' }}>Engenharia Curiosa</h5>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Canal de Documentários</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card" style={{
                backgroundColor: '#fff',
                color: '#222',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                marginBottom: '30px',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.5rem'
                }}>
                  "
                </div>
                <div style={{ marginTop: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>
                    "Os reels produzidos pelo MegaHype para nossa empresa ficaram incríveis! A qualidade dos vídeos curtos superou nossas expectativas e ajudou a engajar ainda mais nosso público nas redes sociais."
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className="lni lni-user" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                    </div>
                    <div>
                      <h5 style={{ margin: '0', color: '#222' }}>Office Tax Services</h5>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Empresa de Serviços Contábeis</p>
                    </div>
                  </div>
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
                <h2 style={{ textAlign: 'center' }}>Em Breve</h2>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0 }}>
                  Nossos utilitários exclusivos estão sendo desenvolvidos. Em breve você poderá baixar ferramentas incríveis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Área para futuros softwares */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px',
              border: '2px dashed #dee2e6'
            }}>
              <i className="lni lni-cog" style={{
                fontSize: '4rem',
                color: '#6c757d',
                marginBottom: '20px',
                display: 'block'
              }}></i>
              <h3 style={{
                color: '#495057',
                marginBottom: '15px',
                fontWeight: '500'
              }}>
                Desenvolvimento em Andamento
              </h3>
              <p style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.35', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                Estamos trabalhando em ferramentas exclusivas para melhorar sua experiência. 
                Fique atento às novidades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioImagens() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Array de imagens do portfolio (você pode adicionar mais URLs de imagens)
  const images = [
    {
      id: 1,
      src: "/images/tumblr_60e30e6d38605c33b3fbdbbd4ab6d740_8bbb70f0_1280.png",
      alt: "CSGO Highlight",
    },
    {
      id: 2,
      src: "/images/tumblr_aa492757ba7c5c449c6c500a857b685d_db4e3199_1280.png",
      alt: "Haircut Vlog",
    },
    {
      id: 3,
      src: "/images/tumblr_c9ffdf482dc21ce03b74df304168844e_1acedd86_1280.jpg",
      alt: "Melhores Momentos",
    },
    {
      id: 4,
      src: "/images/tumblr_d0ff5a0dd258b51a2215b3faffc7498c_19fbc92c_1280.jpg",
      alt: "Serra do Rio do Rastro",
    },
    {
      id: 5,
      src: "/images/tumblr_eac877a5f8d6492e339f47b5399078da_6d246eb0_1280.jpg",
      alt: "Podcast Cezar Jorge Amanda"
    },
    {
      id: 6,
      src: "/images/tumblr_2afd91ea118603fab48676ed9f27e0cd_33298d6f_1280.png",
      alt: "Thumbnail 6"
    },
    {
      id: 7,
      src: "/images/tumblr_609a2d98f06c415632c44995e59dece3_b854fcaf_1280.png",
      alt: "Thumbnail 7"
    },
    {
      id: 8,
      src: "/images/tumblr_cba5d1255d70b42e9d421064d618c78a_76fcd3db_1280.jpg",
      alt: "Thumbnail 8"
    },
    {
      id: 9,
      src: "/images/tumblr_d9f3aaadec63386699e06c13b9a9119d_1b329f57_1280.png",
      alt: "Thumbnail 9"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlideModal = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlideModal = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play do slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Detectar se é mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Portfólio</h6>
                <h2 style={{ textAlign: 'center' }}>Imagens & Thumbnails</h2>
                <p style={{ textAlign: 'center' }}>Exemplos de thumbnails e imagens criadas para clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="image-slider-container" style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              backgroundColor: '#f8f9fa',
              maxWidth: '640px',
              margin: '0 auto',
              cursor: isMobile ? 'default' : 'pointer'
            }} onClick={isMobile ? undefined : openModal}>
              {/* Apenas a imagem atual */}
              <div style={{
                width: '100%',
                paddingTop: '56.25%', // 16:9
                position: 'relative'
              }}>
                <img
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '0 0 10px 10px'
                }}>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{images[currentSlide].title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>{images[currentSlide].description}</p>
                </div>
              </div>

              {/* Botões de navegação */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  zIndex: 10
                }}
              >
                ‹
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  zIndex: 10
                }}
              >
                ›
              </button>

              {/* Indicadores */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px',
                zIndex: 10
              }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      background: currentSlide === index ? '#007bff' : 'rgba(255,255,255,0.6)',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Informações adicionais */}
            <div className="text-center mt-4">
              <p style={{ color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
                Clique na imagem para ampliar ou use os botões de navegação
              </p>
              <button 
                onClick={() => window.open('https://nevesntc.tumblr.com', '_blank')}
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#0056b3'}
                onMouseOut={(e) => e.target.style.background = '#007bff'}
              >
                Ver Mais Exemplos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal estilo Instagram Stories */}
      {isModalOpen && !isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closeModal}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            borderRadius: '15px',
            overflow: 'hidden',
            backgroundColor: '#000'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {/* Imagem do modal */}
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Navegação do modal */}
            <button
              onClick={prevSlideModal}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ‹
            </button>
            <button
              onClick={nextSlideModal}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ›
            </button>

            {/* Indicadores do modal */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              zIndex: 1001
            }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* Contador */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              color: 'white',
              fontSize: '14px',
              zIndex: 1001,
              background: 'rgba(0,0,0,0.7)',
              padding: '5px 10px',
              borderRadius: '15px'
            }}>
              {currentSlide + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
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
                <h2 style={{ textAlign: 'center' }}>Vídeos</h2>
                <p style={{ textAlign: 'center' }}>Exemplos de vídeos: Reels, Curtos, Longos, Casamentos, Trailers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          {/* Vídeos para Youtube */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://youtube.com/playlist?list=PLpovQk6bHNPbC0OT6DVPfCVK1gOxMhB0z&si=ruWGWmbgWGQqiBqT', '_blank')} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>
              </div>
              <div className="service-content">
                <h4 style={{ marginBottom: 12, marginTop: 4 }}>
                  Vídeos para Youtube
                </h4>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0, marginTop: 6 }}>
                  Produzimos vídeos de alta qualidade para o seu canal no YouTube. Transformamos suas ideias em conteúdo envolvente e profissional, ajudando você a se destacar e engajar sua audiência. Seja para vlogs, gameplays ou outros formatos, garantimos resultados que elevam o padrão do seu canal e aumentam suas visualizações.
                </p>
              </div>
            </div>
          </div>

          {/* Curtos */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://drive.google.com/drive/folders/1ZEMzAugTt5dznmmLHshWU5llUyOG6eyq?usp=sharing', '_blank')} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
              </div>
              <div className="service-content">
                <h4 style={{ marginBottom: 12, marginTop: 4 }}>
                  Curtos
                </h4>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0, marginTop: 6 }}>
                  Criamos vídeos curtos e dinâmicos, ideais para redes sociais. Transformamos suas ideias em conteúdos impactantes, perfeitos para engajar o público e promover sua marca. Com nossa produção, seus vídeos ganham destaque e atraem mais atenção online.
                </p>
              </div>
            </div>
          </div>

          {/* Reels */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://drive.google.com/drive/folders/1o16BPDBLrFwq1z7UICDd8wewQrcKMIns?usp=sharing', '_blank')} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </div>
              <div className="service-content">
                <h4 style={{ marginBottom: 12, marginTop: 4 }}>
                  Reels
                </h4>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0, marginTop: 6 }}>
                  Desenvolvemos vídeos envolventes para Reels, com qualquer duração. Criamos conteúdos criativos e cativantes que aumentam o alcance da sua marca e engajam o público. Destaque-se nas redes sociais com vídeos inovadores e de alto impacto visual.
                </p>
              </div>
            </div>
          </div>

          {/* Casamentos e Festas */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://youtube.com/playlist?list=PLpovQk6bHNPaBppVGUG0BfrIq0owv4hoQ&si=s42Gpuo0ANoaVDKG', '_blank')} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                </svg>
              </div>
              <div className="service-content">
                <h4 style={{ marginBottom: 12, marginTop: 4 }}>
                  Casamentos e Festas
                </h4>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0, marginTop: 6 }}>
                  Editamos vídeos de casamentos e festas de 15 anos, transformando gravações em filmes emocionantes e memoráveis. Nossa equipe une sensibilidade e técnica para criar uma narrativa única, destacando os melhores momentos e emoções do seu evento especial.
                </p>
              </div>
            </div>
          </div>

          {/* Trailer */}
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon" onClick={() => window.open('https://youtube.com/playlist?list=PLpovQk6bHNPb7-bDpwrHOmVGfwcVahGce&si=hhjVNzM6X3eK9rPq', '_blank')} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                </svg>
              </div>
              <div className="service-content">
                <h4 style={{ marginBottom: 12, marginTop: 4 }}>
                  Trailer
                </h4>
                <p style={{ textAlign: 'left', lineHeight: '1.35', marginBottom: 0, marginTop: 6 }}>
                  Produzimos trailers criativos e impactantes para eventos ou projetos. Com edição dinâmica, destacamos os pontos fortes e despertamos o interesse do público. Nossos teasers transmitem a essência do seu conteúdo e aumentam o engajamento da sua audiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Novo componente de contato com Formspree
function ContatoForm() {
  const [state, handleSubmit] = useForm("xldlrqbl");

  if (state.succeeded) {
    return (
      <div style={{
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #c3e6cb',
        textAlign: 'center',
        margin: '40px auto',
        maxWidth: '500px'
      }}>
        ✅ Formulário enviado com sucesso! Em breve entraremos em contato.
      </div>
    );
  }

  return (
    <section className="services-area services-eight">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <h2 style={{
              textAlign: 'center',
              marginBottom: 30,
              fontWeight: 600,
              color: '#00d4d7',
              fontSize: '2rem',
              letterSpacing: '-0.01em'
            }}>
              Pedidos
            </h2>
            <form onSubmit={handleSubmit} style={{
              backgroundColor: '#f8f9fa',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
              maxWidth: '600px',
              margin: '40px auto'
            }}>
              <div style={{marginBottom: 20}}>
                <label htmlFor="nome" style={{fontWeight: 500, color: '#333'}}>Nome Completo *</label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginTop: '8px'
                  }}
                />
                <ValidationError prefix="Nome" field="nome" errors={state.errors} />
              </div>
              <div style={{marginBottom: 20}}>
                <label htmlFor="email" style={{fontWeight: 500, color: '#333'}}>Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginTop: '8px'
                  }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div style={{marginBottom: 20}}>
                <label htmlFor="telefone" style={{fontWeight: 500, color: '#333'}}>Telefone *</label>
                <input
                  id="telefone"
                  type="tel"
                  name="telefone"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginTop: '8px'
                  }}
                />
                <ValidationError prefix="Telefone" field="telefone" errors={state.errors} />
              </div>
              <div style={{marginBottom: 20}}>
                <label htmlFor="tipoServico" style={{fontWeight: 500, color: '#333'}}>Tipo de Serviço *</label>
                <select
                  id="tipoServico"
                  name="tipoServico"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginTop: '8px',
                    backgroundColor: '#fff'
                  }}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Thumbnail">Thumbnail</option>
                  <option value="Vídeos para Youtube">Vídeos para Youtube</option>
                  <option value="Curtos">Curtos</option>
                  <option value="Reels">Reels</option>
                  <option value="Casamentos e Festas">Casamentos e Festas</option>
                  <option value="Trailer">Trailer</option>
                  <option value="Outro">Outro</option>
                </select>
                <ValidationError prefix="Tipo de Serviço" field="tipoServico" errors={state.errors} />
              </div>
              <div style={{marginBottom: 30}}>
                <label htmlFor="descricao" style={{fontWeight: 500, color: '#333'}}>Descrição do Projeto *</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  required
                  rows={5}
                  placeholder="Descreva seu projeto, ideias ou requisitos específicos..."
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginTop: '8px',
                    resize: 'vertical'
                  }}
                />
                <ValidationError prefix="Descrição" field="descricao" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: state.submitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: state.submitting ? 0.7 : 1,
                  width: '100%'
                }}
              >
                {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FOOTER MODERNO E ALINHADO ---
// Substituir o Footer por uma versão mais alinhada, responsiva e bonita
function Footer() {
  // Função para rolar até a seção sobre ao clicar no logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    const section = document.querySelector('#about');
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
    <footer className="footer-area footer-eleven" style={{background: '#111', color: '#fff', padding: '40px 0 0 0', marginTop: '60px'}}>
      <div className="container">
        <div className="row align-items-center" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '30px 0'}}>
          {/* Logo e descrição */}
          <div className="col-lg-4 col-md-6 col-12" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 250, marginBottom: 30}}>
            <div className="footer-widget f-about" style={{width: '100%'}}>
              <div className="logo">
                <img 
                  src="/images/megahype2.jpg" 
                  alt="MegaHype Image" 
                  id="logoImage" 
                  style={{
                    cursor: 'pointer',
                    border: '3px solid #007bff',
                    borderRadius: '8px',
                    padding: '5px',
                    transition: 'all 0.3s ease',
                    width: '120px',
                    marginBottom: '15px'
                  }} 
                  onClick={handleLogoClick}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <p style={{margin: 0, color: '#ccc', fontSize: '15px', marginBottom: 10, textAlign: 'justify'}}>Buscando sempre o melhor para o cliente ficar sempre satisfeito. O cliente é a nossa prioridade.</p>
            </div>
          </div>
          {/* Redes Sociais */}
          <div className="col-lg-2 col-md-6 col-12" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 30}}>
            <div className="footer-widget f-link">
              <h5 style={{color: '#fff', marginBottom: 10, textAlign: 'left'}}>Redes Sociais</h5>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, textAlign: 'left'}}>
                <li style={{marginBottom: 8}}><a href="https://www.instagram.com/megahype_/" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s', textAlign: 'left'}} onMouseOver={e => e.target.style.color='#007bff'} onMouseOut={e => e.target.style.color='#fff'}>Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/megahype" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s', textAlign: 'left'}} onMouseOver={e => e.target.style.color='#007bff'} onMouseOut={e => e.target.style.color='#fff'}>Linkedin</a></li>
              </ul>
            </div>
          </div>
          {/* Suporte */}
          <div className="col-lg-2 col-md-6 col-12" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 30}}>
            <div className="footer-widget f-link">
              <h5 style={{color: '#fff', marginBottom: 10, textAlign: 'left'}}>Suporte</h5>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, textAlign: 'left'}}>
                <li style={{marginBottom: 8}}>
                  <Link to="/contato" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s', textAlign: 'left'}} onMouseOver={e => e.target.style.color='#007bff'} onMouseOut={e => e.target.style.color='#fff'}>Email</Link>
                </li>
                <li><a href="https://drive.google.com/drive/folders/1ahZAuneOJGRtZUF0lCERxEUIc3q39Gkt?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.2s', textAlign: 'left'}} onMouseOver={e => e.target.style.color='#007bff'} onMouseOut={e => e.target.style.color='#fff'}>Media Kit</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div style={{borderTop: '1px solid #222', marginTop: 30, padding: '20px 0 0 0', textAlign: 'left', paddingLeft: 30}}>
          <p className="copyright-text" style={{color: '#aaa', fontSize: '14px', margin: 0, textAlign: 'justify'}}>
            <span>© {new Date().getFullYear()} Megahype</span>
          </p>
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
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Verificar se o usuário já aceitou os cookies
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    // Só mostra o aviso se o usuário nunca interagiu com os cookies
    if (hasAcceptedCookies === null) {
      setShowCookieConsent(true);
    }
  }, []);

  // Função para aceitar cookies
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  // Função para recusar cookies
  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookieConsent(false);
  };

  // Fecha o dropdown ao clicar fora
  // Remover o useEffect que fecha o dropdown ao clicar fora

  return (
    <>
      <VideoBackground />
      {/* Google Fonts - Inter */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* EmailJS */}
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      
      {/* Estilo global para fonte Inter */}
      <style>
        {`
          * {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          }
          
          body {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            letter-spacing: -0.01em;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            font-weight: 600;
            letter-spacing: -0.02em;
          }
          
          p, span, div, a, button, input, textarea, select {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            text-align: justify;
          }
          
          p {
            text-align: justify;
            line-height: 1.6;
          }
        `}
      </style>
      
      {/* Header com menu centralizado */}
      <header style={{
        backgroundColor: '#000',
        padding: '15px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {/* Logo */}
            <Link to="/" onClick={e => { e.preventDefault(); navigate('/'); }} style={{
              textDecoration: 'none',
              position: 'absolute',
              left: '0'
            }}>
              <img src="/images/megahype.png" alt="MegaHype" style={{ 
                height: '40px',
                filter: 'brightness(0) invert(1)'
              }} />
            </Link>

            {/* Menu de navegação centralizado */}
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <NavLink 
                to="/"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Início
              </NavLink>

              <NavLink 
                to="/apps"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Softwares
              </NavLink>

              <NavLink 
                to="/contato"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contato
              </NavLink>

              {/* Dropdown Portfólio corrigido */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    fontSize: '15px',
                    fontWeight: '500',
                    letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Portfólio
                  <span style={{
                    fontSize: '12px',
                    transition: 'transform 0.3s ease',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ▼
                  </span>
                </button>
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '8px 0',
                    marginTop: '8px',
                    minWidth: '150px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    zIndex: 1001
                  }}>
                    <a
                      href="/portfolio-imagens"
                      style={{
                        display: 'block',
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        textAlign: 'left',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: '400',
                        letterSpacing: '-0.01em',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      onClick={e => {
                        e.preventDefault();
                        console.log('Clique em Imagens');
                        navigate('/portfolio-imagens');
                        setTimeout(() => setDropdownOpen(false), 100);
                      }}
                      onMouseOver={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                      onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
                    >
                      Imagens
                    </a>
                    <a
                      href="/portfolio-videos"
                      style={{
                        display: 'block',
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        textAlign: 'left',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: '400',
                        letterSpacing: '-0.01em',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      onClick={e => {
                        e.preventDefault();
                        console.log('Clique em Vídeos');
                        navigate('/portfolio-videos');
                        setTimeout(() => setDropdownOpen(false), 100);
                      }}
                      onMouseOver={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                      onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
                    >
                      Vídeos
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Rotas SPA */}
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} servicesRef={servicesRef} />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/portfolio-imagens" element={<PortfolioImagens />} />
        <Route path="/portfolio-videos" element={<PortfolioVideos />} />
        <Route path="/contato" element={<ContatoForm />} />
      </Routes>

      <Footer />
      
      {/* Popup de Cookies */}
      {showCookieConsent && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          right: '20px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: 10000,
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>
              🍪 Política de Cookies
            </h4>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#666' }}>
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={acceptCookies}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Aceitar
            </button>
            <button
              onClick={declineCookies}
              style={{
                backgroundColor: 'transparent',
                color: '#666',
                border: '1px solid #ddd',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.borderColor = '#999';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#ddd';
              }}
            >
              Recusar
            </button>
          </div>
        </div>
      )}


      
      {/* Scroll Top Button igual ao original */}
    </>
  );
}

export default App;
