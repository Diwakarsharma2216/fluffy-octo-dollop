export default function Insights() {
  const listItems = [
    { 
      id: 1,
      title: "Pre-market Entry", 
      desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.", 
      active: true 
    },
    { 
      id: 2,
      title: "Market Entry", 
      desc: "Research demand, assess competition, choose mode, locallize offering, comply regulations, price strategically, partner locally, iterate learning.", 
      active: false 
    },
    { 
      id: 3,
      title: "Operations", 
      desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.", 
      active: false 
    },
    { 
      id: 4,
      title: "Growth & Expansion", 
      desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.", 
      active: false 
    }
  ];

  const insightImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Coins on table",
      title: "Pre-Market",
      desc: "Evaluating Supply Chain Readiness Before Committing Capital In Emerging Markets",
      widthClass: "w-[55%]",
      isVertical: false
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Team operation",
      title: "Operations",
      widthClass: "w-[22.5%]",
      isVertical: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Growth chart",
      title: "Growth & Expansion",
      widthClass: "w-[22.5%]",
      isVertical: true
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
      
      <div className="lg:w-1/5">
        <div className="bg-gray-100/80 rounded-2xl p-8 h-48 flex items-center shadow-sm">
          <h2 className="text-[20px] font-bold text-gray-900 leading-tight">INSPIRATION &<br/>INSIGHTS</h2>
        </div>
      </div>
      
      <div className="lg:w-[45%] flex flex-col justify-center pr-4">
        {listItems.map((item) => (
          <div key={item.id} className={`border-b ${item.active ? 'border-blue-400' : 'border-gray-200'} py-6 cursor-pointer group transition-colors`}>
            <h3 className={`text-[13px] font-bold mb-2 ${item.active ? 'text-[#0b3383]' : 'text-gray-900 group-hover:text-[#0b3383]'}`}>
              {item.title}
            </h3>
            <p className={`text-xs leading-[1.8] ${item.active ? 'text-[#0b3383]' : 'text-gray-600'}`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="lg:w-[35%] flex gap-3 h-[420px]">
         {insightImages.map((img) => (
           <div key={img.id} className={`${img.widthClass} relative rounded-[2rem] overflow-hidden shadow-lg group`}>
             <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"/>
             
             {img.isVertical ? (
               <>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b3383]/90 via-[#0b3383]/20 to-transparent mix-blend-multiply"></div>
                 <div className="absolute bottom-8 left-0 right-0 flex justify-center items-end">
                   <h4 className="text-white font-bold text-sm tracking-wider" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                     {img.title}
                   </h4>
                 </div>
               </>
             ) : (
               <>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2a] via-[#0a1b2a]/40 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                   <h4 className="text-white font-bold text-xl mb-1.5">{img.title}</h4>
                   {img.desc && <p className="text-gray-300 text-[10px] leading-[1.4] opacity-90 pr-2">{img.desc}</p>}
                 </div>
               </>
             )}
           </div>
         ))}
      </div>
    </section>
  );
}
