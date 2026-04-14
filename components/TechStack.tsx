/* eslint-disable @next/next/no-img-element */

export default function TechStack() {
  const categories = [
    {
      title: "Languages",
      icons: "js,ts,python,php,c,cpp,cs,lua,swift,kotlin"
    },
    {
      title: "Frontend",
      icons: "react,nextjs,angular,vue,html,css,tailwind,bootstrap,sass"
    },
    {
      title: "Mobile",
      icons: "reactnative,expo,flutter,androidstudio,apple,firebase"
    },
    {
      title: "Backend & Cloud",
      icons: "nodejs,django,laravel,aws,azure,gcp,docker"
    },
    {
      title: "Tools & Design",
      icons: "figma,ps,ae,pr,ai,blender,linux,ubuntu,raspberrypi,arduino"
    }
  ];

  return (
    <section id="tech" className="h-screen pt-20 px-6 bg-[#050505] text-white overflow-y-auto">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto pt-10 pb-20">
        {/* Header */}
        <div className="mb-12" style={{ animation: 'fadeUp 0.7s ease-out forwards', opacity: 0 }}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Technology Stack.</h2>
          <div className="w-10 h-[2px] bg-white/20 mb-4"></div>
          <p className="text-neutral-500 font-light max-w-lg text-[15px]">
            The tools and architectures I leverage to construct robust, scalable platforms.
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="space-y-10">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center group"
              style={{ animation: `fadeUp 0.6s ease-out ${0.1 + index * 0.1}s forwards`, opacity: 0 }}
            >
              <h3 className="w-36 text-sm font-medium text-neutral-400 md:text-right shrink-0 tracking-wide">
                {category.title}
              </h3>
              <div className="flex-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                <img 
                  src={`https://skillicons.dev/icons?i=${category.icons}&theme=dark`} 
                  alt={`${category.title} tech stack`} 
                  className="max-w-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
