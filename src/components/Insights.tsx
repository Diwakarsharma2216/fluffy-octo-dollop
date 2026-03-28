import { listItems, insightImages } from '@/lib/data';

export default function Insights() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="page-container flex flex-col lg:flex-row items-start gap-6 lg:gap-[70px] pt-[50px] pb-[60px]">

        {/* Label card */}
        <div className="flex-shrink-0">
          <div className="bg-[#f0f0f0] rounded-[24px] p-8 w-full lg:w-[210px] flex items-center justify-start mt-2">
            <h2 className="text-[17px] font-extrabold text-[#111827] leading-[1.4] tracking-widest uppercase">
              INSPIRATION &<br />INSIGHTS
            </h2>
          </div>
        </div>

        {/* Article list */}
        <div className="w-full lg:w-[35%] lg:max-w-[480px] flex-shrink-0 flex flex-col mt-2">
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

        {/* Image gallery — horizontal scroll on mobile, natural flex on desktop */}
        <div className="flex-1 w-full overflow-x-auto lg:overflow-x-visible">
          <div className="flex gap-5 min-w-max lg:min-w-0 lg:h-full items-stretch justify-end">
            {insightImages.map((img) => (
              <div
                key={img.id}
                className={`relative overflow-hidden shadow-sm group flex-shrink-0 cursor-pointer`}
                style={{
                  borderRadius: '20px',
                  width: img.isVertical ? '80px' : '374px',
                  height: img.isVertical ? '498px' : '498px',
                }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />

                {img.isVertical ? (
                  <>
                    {/* Vertical card gradient */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,27,54,0.79) 90%)', borderRadius: '20px' }} />
                    <div className="absolute inset-0 flex flex-col justify-end items-center pb-[50px] pointer-events-none">
                      <h4 className="text-white font-extrabold text-[15px] tracking-wide" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        {img.title}
                      </h4>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Main card gradient — Figma: 180deg, transparent→rgba(12,27,54,0.79) at 90% */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        borderRadius: '20px',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(12, 27, 54, 0.79) 90%)',
                      }}
                    />
                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                      <h4 className="text-white font-extrabold text-[18px] mb-2">{img.title}</h4>
                      {img.desc && <p className="text-[#e2e8f0] text-[11px] leading-[1.6] font-medium opacity-90 pr-4">{img.desc}</p>}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
