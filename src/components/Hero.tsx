import { popupAvatars } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative w-full h-[898px] overflow-hidden bg-[#0c2fa5]">

      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
        alt="Modern office workspace"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 37,0 C 55,0 56,12 50,24 C 44,36 38,42 38,50 C 38,58 44,64 50,76 C 56,88 55,100 37,100 L 0,100 Z"
          fill="#0c2fa5"
        />
      </svg>

      <div className="absolute inset-0 z-20 flex flex-col justify-between py-[60px] pl-[72px] pr-[55%] pointer-events-none">

        <div className="flex flex-col justify-center flex-1 pointer-events-auto">

          <p className="text-[9px] font-bold text-[#a8c0e0] mb-6 tracking-[0.2em] uppercase">
            Accountants and global business advisors
          </p>

          <h1 className="text-white font-extrabold leading-[1.04] tracking-tight" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            EMPOWERED<br />WORKPLACES
          </h1>

          <div className="w-[88%] h-[3.5px] bg-white mt-7 mb-8"></div>

          <p className="text-[12.5px] font-normal leading-[1.75] text-[#cddcf5] max-w-[340px]">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button
            className="mt-12 flex items-center gap-4 bg-[#ff6c0e] hover:bg-[#e55f0a] text-black text-[11px] font-extrabold tracking-widest w-fit px-6 py-3.5 transition-all active:scale-95"
            style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
          >
            <span className="text-[18px] leading-none">&#8594;</span>
            <span>LETS CONNECT</span>
          </button>
        </div>

        <p className="text-[9.5px] font-extrabold text-[#c8d9ef] tracking-[0.18em] uppercase pointer-events-auto">
          Accounting, taxation, &amp; business advisory between India, Japan, and the world
        </p>
      </div>

      <div className="absolute bottom-[62px] right-[5%] z-20 flex items-center gap-5 pointer-events-auto">
        <div className="flex -space-x-[12px]">
          {popupAvatars.map((avatar) => (
            <div
              key={avatar.id}
              style={{ zIndex: avatar.zIndex }}
              className="w-[48px] h-[48px] rounded-full border-[2.5px] border-white overflow-hidden shadow-lg relative"
            >
              <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="w-[48px] h-[48px] rounded-full bg-[#ff6c0e] border-[2.5px] border-white flex items-center justify-center text-[9px] font-extrabold text-white z-[10] relative shadow-lg">
            MORE
          </div>
        </div>
        <div>
          <p className="text-white text-[28px] font-extrabold leading-none mb-1">250 +</p>
          <p className="text-[#d1ddf5] text-[10px] font-medium leading-[1.4]">
            Enjoy Working<br />with us
          </p>
        </div>
      </div>

    </section>
  );
}
