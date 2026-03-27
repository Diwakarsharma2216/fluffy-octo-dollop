import { topics } from '@/lib/data';

export default function HotTopics() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#ff6c0e] text-black font-extrabold text-[11px] tracking-widest px-8 py-5 flex items-center justify-center md:min-w-[160px] lg:min-w-[200px]">
          HOT TOPICS
        </div>
        
        <div className="flex-1 flex overflow-x-auto hide-scrollbar">
          {topics.map((topic) => (
            <div key={topic.id} className="flex-1 min-w-[260px] max-w-[300px] border-r border-gray-100 p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
              <p className="text-[13px] font-semibold text-gray-800 leading-relaxed mb-10">
                {topic.title}
              </p>
              <div className="flex justify-end">
                <span className="text-gray-300 group-hover:text-black transition-colors font-bold text-xl leading-none">
                  &#8594;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
