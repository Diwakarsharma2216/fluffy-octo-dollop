import { firmStats } from '@/lib/data';

export default function AboutFirm() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto h-[688px] bg-[#FFFFFF] px-6 lg:px-[120px] pt-[50px] pb-10 flex items-stretch gap-6 overflow-hidden">

      <div
        className="absolute left-[12%] top-[10%] w-[65%] h-[85%] opacity-[0.05] pointer-events-none bg-no-repeat bg-center bg-contain z-0"
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")' }}
      ></div>

      <div className="w-[18%] flex-shrink-0 relative z-10 pt-4">
        <div className="bg-[#f2f2f2] rounded-[24px] p-8 h-[220px] flex items-center justify-start">
          <h2 className="text-[20px] font-extrabold text-[#111827] leading-[1.3] tracking-wider">ABOUT<br/>FIRM</h2>
        </div>
      </div>

      <div className="w-[42%] flex flex-col justify-start relative z-10 pl-6 pr-4 pt-4">

        <h3 className="text-[24px] text-[#374151] font-medium mb-5">HLS Global Group</h3>

        <p className="text-[13px] text-[#4b5563] leading-[1.85] mb-[50px] text-justify font-medium">
          is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
        </p>

        <div className="grid grid-cols-2 gap-y-8 gap-x-12 w-[90%] relative">

          {firmStats.slice(0, 2).map((stat) => (
            <div key={stat.id}>
              <div className="text-[32px] font-extrabold text-[#111827] mb-2">{stat.value}</div>
              <div className="text-[13px] text-[#4b5563] font-medium leading-[1.6]">
                {stat.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < stat.lines.length - 1 && <br/>}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="col-span-2 w-full h-[2.5px] bg-[#1a4b9c] my-[-6px]"></div>

          {firmStats.slice(2, 4).map((stat) => (
            <div key={stat.id}>
              <div className="text-[32px] font-extrabold text-[#111827] mb-2">{stat.value}</div>
              <div className="text-[13px] text-[#4b5563] font-medium leading-[1.6]">
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

      <div className="w-[40%] flex flex-col items-end pt-3 relative z-10 px-6">
        <div className="w-full flex justify-end mb-6">
          <button className="bg-[#ff6c0e] text-[#000000] text-[11px] font-extrabold py-3 pl-8 pr-5 rounded-full flex items-center gap-[100px] shadow-sm hover:bg-[#e05f0b] transition-colors focus:outline-none uppercase">
            <span>WE ARE LOCATED</span>
            <span>INDIA ▼</span>
          </button>
        </div>

        <div className="w-full h-[530px] relative rounded-[28px] overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Corporate Building HQ"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
