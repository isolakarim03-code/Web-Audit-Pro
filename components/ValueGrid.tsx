import React from 'react';
import { Smartphone, Zap, Search, LayoutTemplate } from 'lucide-react';

const ValueGrid: React.FC = () => {
  const features = [
    {
      icon: <LayoutTemplate className="w-6 h-6 text-indigo-600" />,
      title: "UX & Design Analysis",
      desc: "We review your layout, hierarchy, and visual appeal to ensure you look professional."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: "Mobile Optimization Check",
      desc: "We test responsiveness to ensure you aren't losing the 60% of traffic on mobile devices."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Speed Performance Audit",
      desc: "We analyze load times and identify the heavy assets slowing you down."
    },
    {
      icon: <Search className="w-6 h-6 text-indigo-600" />,
      title: "SEO & Visibility Review",
      desc: "We check basic on-page SEO to see if Google can actually find and rank your business."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What You Get In Your <span className="text-indigo-600">Free Assessment</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              This isn't just an automated score. You get a breakdown of actionable steps you can take to immediately improve your digital presence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
             <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-slate-800">Growth Report</h3>
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-bold">PDF READY</span>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-red-400 w-[45%]"></div>
                        </div>
                        <p className="text-xs text-slate-500 flex justify-between">
                            <span>Performance Score</span>
                            <span className="font-bold text-red-500">45/100</span>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                             <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                             <div className="text-sm">
                                <span className="block font-bold text-slate-700">Images are too large</span>
                                <span className="text-slate-500 text-xs">Save 2.4s load time</span>
                             </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                             <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">!</div>
                             <div className="text-sm">
                                <span className="block font-bold text-slate-700">Mobile tap targets small</span>
                                <span className="text-slate-500 text-xs">Improve usability</span>
                             </div>
                        </div>
                    </div>
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium text-sm mt-4">Download Full Plan</button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;