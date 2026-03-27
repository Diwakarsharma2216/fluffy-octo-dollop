import { topics } from '@/lib/data';

export default function HotTopics() {
  return (
    <section className="w-full max-w-[1928px] mx-auto h-[150px] bg-[#FFFFFF] px-6 lg:px-[120px] pt-[50px] flex items-start gap-[60px] relative overflow-hidden">

      <div className="flex-shrink-0">
        <div
          className="bg-[#ff6c0e] text-[#000000] font-extrabold text-[12px] tracking-widest pl-7 pr-12 py-[15px] rounded-l-md shadow-sm"
          style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)', width: '220px' }}
        >
          HOT TOPICS
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 h-full">
        {topics.map((topic) => (
          <div key={topic.id} className="flex flex-col h-[75px] group cursor-pointer relative">
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
    </section>
  );
}
