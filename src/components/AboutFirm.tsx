import { firmStats } from '@/lib/data';

export default function AboutFirm() {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="lg:w-1/5">
        <div className="bg-gray-100/80 rounded-2xl p-8 h-48 flex items-center shadow-sm">
          <h2 className="text-[22px] font-bold text-gray-900 leading-tight">ABOUT<br/>FIRM</h2>
        </div>
      </div>
      <div className="lg:w-[45%] flex flex-col justify-center relative z-10 pt-4">
        <h3 className="text-2xl text-gray-800 font-semibold mb-6">HLS Global Group</h3>
        <p className="text-[13px] text-gray-600 leading-[1.8] mb-12 text-justify pr-4">
          Is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves on delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
        </p>
        <div className="grid grid-cols-2 gap-y-10 gap-x-12 border-t-[3px] border-blue-100/60 pt-10 pr-12">
           {firmStats.map((stat) => (
             <div key={stat.id}>
               <div className="text-[34px] font-bold text-gray-800 mb-1">{stat.value}</div>
               <div className="text-[11px] text-gray-500 font-medium leading-relaxed">
                 {stat.lines.map((line, i) => (
                   <span key={i}>
                     {line}
                     {i < stat.lines.length - 1 && <br/>}
                   </span>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>
      <div className="lg:w-[35%] flex flex-col items-end gap-5">
        <div className="flex justify-end">
           <button className="bg-[#ff6c0e] text-black text-[11px] font-bold py-3 pr-4 pl-6 rounded-full flex items-center gap-8 shadow-md hover:bg-[#e65c05] transition-colors focus:outline-none">
             <span>WE ARE LOCATED</span>
             <span>INDIA ▼</span>
           </button>
        </div>
        <div className="w-full h-[450px] relative rounded-3xl overflow-hidden shadow-2xl mt-1">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Corporate Building HQ" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
