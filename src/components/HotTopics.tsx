import { topics } from '@/lib/data';

export default function HotTopics() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div
        className="page-container flex flex-col lg:flex-row items-start gap-6 lg:gap-[60px] pt-[50px] pb-8 lg:h-[150px]"
      >
        {/* Label badge */}
        <div className="flex-shrink-0 self-start">
          <div
            className="bg-[#ff6c0e] text-[#000000] font-extrabold text-[12px] tracking-widest pl-7 pr-12 py-[15px] rounded-l-md shadow-sm"
            style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)', minWidth: '160px' }}
          >
            HOT TOPICS
          </div>
        </div>

        {/* Topics grid */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {topics.map((topic) => (
            <div key={topic.id} className="flex flex-col group cursor-pointer relative">
              <div className="w-full h-[3px] bg-[#4a72b2] mb-3.5"></div>
              <p className="text-[13px] text-[#2d3748] leading-[1.4] font-semibold pr-8 transition-colors hover:text-[#4a72b2]">
                {topic.title}
              </p>
              <div className="absolute right-0 bottom-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1"
                >
                  <line x1="2" y1="12" x2="21" y2="12"></line>
                  <polyline points="15 5 22 12 15 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
