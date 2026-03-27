import { listItems, insightImages } from '@/lib/data';

export default function Insights() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-[627px] bg-[#FFFFFF] px-6 lg:px-[120px] pt-[50px] pb-[60px] flex items-start gap-[70px] overflow-hidden">

      <div className="flex-shrink-0">
        <div className="bg-[#f0f0f0] rounded-[24px] p-8 w-[210px] h-[220px] flex items-center justify-start mt-2">
          <h2 className="text-[17px] font-extrabold text-[#111827] leading-[1.4] tracking-widest uppercase">INSPIRATION &<br/>INSIGHTS</h2>
        </div>
      </div>

      <div className="w-[35%] max-w-[480px] flex-shrink-0 flex flex-col mt-2">
        {listItems.map((item) => (
          <div key={item.id} className="mb-[22px] cursor-pointer group">
            <h4 className={`text-[13px] font-extrabold mb-1.5 transition-colors ${item.active ? 'text-[#35579f]' : 'text-[#111827] group-hover:text-[#35579f]'}`}>
              {item.title}
            </h4>
            <p className={`text-[11px] font-semibold leading-[1.65] mb-[14px] transition-colors pr-4 ${item.active ? 'text-[#35579f]' : 'text-[#6b7280]'}`}>
              {item.desc}
            </p>
            <div className={`w-full h-[1.5px] transition-colors ${item.active ? 'bg-[#35579f]' : 'bg-[#e5e7eb] group-hover:bg-[#d1d5db]'}`}></div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex gap-5 h-full items-stretch justify-end">
        {insightImages.map((img) => (
          <div
            key={img.id}
            className={`${img.widthClass === 'w-[320px]' ? 'w-[380px]' : 'w-[100px]'} relative rounded-[28px] overflow-hidden shadow-sm group flex-shrink-0 cursor-pointer`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"/>

            {img.isVertical ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-center pb-[50px] pointer-events-none">
                  <h4 className="text-white font-extrabold text-[15px] tracking-wide" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {img.title}
                  </h4>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                  <h4 className="text-white font-extrabold text-[18px] mb-2">{img.title}</h4>
                  {img.desc && <p className="text-[#e2e8f0] text-[11px] leading-[1.6] font-medium opacity-90 pr-4">{img.desc}</p>}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
