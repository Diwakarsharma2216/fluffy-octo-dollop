export default function Hero() {
  const popupAvatars = [
    { id: 1, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "user 1", zIndex: 30 },
    { id: 2, src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "user 2", zIndex: 20 }
  ];

  return (
    <section className="relative w-full h-auto md:h-[600px] flex flex-col md:flex-row bg-[#0b3383] text-white overflow-hidden">
      <div className="w-full md:w-[45%] p-10 md:p-16 lg:pl-28 flex flex-col justify-center z-10 relative">
        <p className="text-[11px] font-bold mb-5 tracking-widest text-[#a8c1f0] uppercase">
          Accountants and global business advisors
        </p>
        
        <h1 className="text-5xl lg:text-[4rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
          EMPOWERED <br /> WORKPLACES
        </h1>
        
        <p className="text-sm md:text-base leading-relaxed mb-12 max-w-[400px] text-gray-200">
          By fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
        </p>
        
        <div>
          <button className="bg-[#ff6c0e] hover:bg-[#e05f0b] text-white text-[13px] font-bold py-3.5 px-8 rounded-sm flex items-center gap-4 transition-all w-max shadow-lg">
            <span className="text-lg leading-none">&#8594;</span> 
            <span>LETS CONNECT</span>
          </button>
        </div>

        <div className="mt-20 text-[10px] sm:text-xs text-blue-200 max-w-[400px] font-medium tracking-wide">
          ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[60%] h-full hidden md:block z-0" 
           style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
        
        <div className="w-full h-full bg-gray-200 relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Modern office space" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-24 left-[20%] bg-white/95 rounded-full p-2 flex items-center shadow-xl backdrop-blur-sm shadow-[#00000020] scale-90">
            <div className="flex -space-x-2">
               <div className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="team member" className="w-full h-full object-cover"/>
               </div>
               <div className="w-12 h-12 rounded-full bg-[#0582ff] border-[3px] border-white flex items-center justify-center font-bold text-white text-xl shadow-sm z-10">
                 D
               </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 bg-[#124294]/90 py-2.5 px-6 rounded-full flex items-center gap-5 text-white shadow-xl backdrop-blur-md border border-blue-400/20">
            <div className="flex -space-x-3">
              {popupAvatars.map((avatar) => (
                <div key={avatar.id} style={{ zIndex: avatar.zIndex }} className="w-10 h-10 rounded-full border-2 border-[#124294] overflow-hidden relative">
                    <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover"/>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#ff6c0e] border-2 border-[#124294] flex items-center justify-center text-[9px] font-bold z-10 relative">
                 MORE
              </div>
            </div>
            <div className="pr-2">
              <div className="text-2xl font-bold leading-none mb-0.5">250 +</div>
              <div className="text-[10px] leading-tight text-blue-200">Enjoy Working<br/>with us</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-64 md:hidden relative border-t-4 border-[#ff6c0e]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
      </div>
    </section>
  );
}
