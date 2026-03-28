import React from 'react';

const avatars = [
  { id: 1, src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Client 1' },
  { id: 2, src: 'https://randomuser.me/api/portraits/men/32.jpg', alt: 'Client 2' },
  { id: 3, src: 'https://randomuser.me/api/portraits/women/68.jpg', alt: 'Client 3' },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '46.77vw',
        maxHeight: '898px',
        minHeight: '420px',
        background: 'rgba(0, 51, 141, 1)',
      }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          left: '38%',
          top: '-80px',
          width: '80%',
          height: '680px',
          borderRadius: '14%',
          transform: 'rotate(40.03deg)',
          transformOrigin: 'center center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 15%',
            transform: 'rotate(-40.03deg)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ background: 'rgba(0, 51, 141, 0.82)', zIndex: 2 }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{
          padding: 'clamp(32px, 5vw, 72px) clamp(24px, 5vw, 96px) clamp(28px, 4vw, 62px)',
          zIndex: 10,
        }}
      >
        <div className="flex flex-col w-full lg:max-w-[38%]">
          <p
            className="font-bold uppercase text-[#a8c0e0]"
            style={{ fontSize: 'clamp(7px, 0.47vw, 9px)', letterSpacing: '0.22em', marginBottom: '20px' }}
          >
            Accountants and global business advisors
          </p>

          <h1
            className="text-white font-extrabold leading-[1.05] tracking-tight uppercase"
            style={{ fontSize: 'clamp(28px, 3vw, 58px)' }}
          >
            EMPOWERED<br />WORKPLACES
          </h1>

          <div
            style={{
              width: 'min(88%, 280px)',
              height: '3px',
              background: '#ffffff',
              margin: '20px 0',
            }}
          />

          <p
            className="text-[#cddcf5] font-normal"
            style={{ fontSize: 'clamp(10px, 0.6vw, 11.5px)', lineHeight: '1.8', maxWidth: '300px' }}
          >
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button
            className="flex items-center gap-4 bg-[#ff6c0e] hover:bg-[#e55f0a] text-black font-extrabold uppercase tracking-widest transition-colors active:scale-95"
            style={{
              marginTop: '32px',
              width: '206px',
              height: '49px',
              fontSize: '11px',
              border: '3px solid rgba(16,15,15,1)',
              clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0 100%)',
              paddingLeft: '20px',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '18px', lineHeight: 1 }}>&#8594;</span>
            <span>LETS CONNECT</span>
          </button>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p
            className="font-extrabold uppercase text-[#c8d9ef]"
            style={{ fontSize: 'clamp(7px, 0.47vw, 9px)', letterSpacing: '0.18em', lineHeight: '1.5' }}
          >
            Accounting, taxation, &amp; business advisory between India, Japan, and the world
          </p>

          <div className="flex items-center flex-shrink-0" style={{ gap: '4px' }}>
            <div className="flex">
              {avatars.map((avatar, i) => (
                <div
                  key={avatar.id}
                  style={{
                    zIndex: i + 1,
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                    overflow: 'hidden',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
                    position: 'relative',
                    marginRight: '-10px',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
              <div
                style={{
                  zIndex: 10,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#ff6c0e',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8px',
                  fontWeight: 800,
                  color: '#ffffff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                MORE
              </div>
            </div>

            <div style={{ marginLeft: '24px' }}>
              <p className="text-white font-extrabold leading-none" style={{ fontSize: '26px', marginBottom: '2px' }}>
                250 +
              </p>
              <p className="text-[#d1ddf5] font-medium" style={{ fontSize: '9px', lineHeight: '1.4' }}>
                Enjoy Working<br />with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}