import React, { useEffect, useRef, useState } from 'react';

const videoList = [
  '/videos/2887463-hd_1920_1080_25fps.mp4',
  '/videos/2516160-hd_1920_1080_24fps.mp4',
  '/videos/1350205-hd_1920_1080_30fps.mp4',
  '/videos/8100337-uhd_4096_2160_25fps.mp4',
  '/videos/5092425-hd_1920_1080_30fps.mp4',
  '/videos/2512877-hd_1920_1080_30fps.mp4',
  '/videos/1536315-hd_1920_1080_30fps.mp4'
];

function getRandomDuration() {
  // Entre 8 e 15 segundos
  return Math.floor(Math.random() * 7) + 8;
}

export default function VideoBackground() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    setFade(false);
    // Tempo aleatório para cada vídeo
    const duration = getRandomDuration();
    timeoutRef.current = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % videoList.length);
        setFade(false);
      }, 1200); // tempo do fade
    }, duration * 1000);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div
      className="video-bg-under-content"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        background: '#000',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      {videoList.map((src, idx) => (
        <video
          key={src}
          src={src}
          autoPlay
          loop={false}
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            opacity: idx === current ? (fade ? 0 : 0.28) : 0,
            transition: 'opacity 1.2s cubic-bezier(.4,0,.2,1)',
            filter: 'brightness(0.6) blur(2px) grayscale(0.2)'
          }}
          onEnded={() => {
            // Se o vídeo acabar antes do tempo, já faz o fade
            if (idx === current) setFade(true);
          }}
        />
      ))}
      {/* Overlay preto para garantir contraste */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1
        }}
      />
    </div>
  );
} 