import { listItems, insightImages } from '@/lib/data';

export default function Insights() {
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
