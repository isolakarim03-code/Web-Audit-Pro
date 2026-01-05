import React from 'react';
import { XCircle, AlertTriangle, Clock, MousePointerClick } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Slow Loading Speeds",
      desc: "53% of mobile visits are abandoned if a site takes longer than 3 seconds to load."
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-500" />,
      title: "Confusing Navigation",
      desc: "If users can't find what they need in clicks, they leave. Friction kills sales."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Outdated Design",
      desc: "75% of consumers admit to judging a company's credibility based on their website design."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-red-500" />,
      title: "Weak Call-to-Action",
      desc: "Without clear direction, visitors browse and leave without ever contacting you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Is Your Website Working <span className="text-red-600 italic">Against</span> You?
          </h2>
          <p className="text-lg text-slate-600">
            Most business websites fail not because of traffic—but because of poor structure, weak messaging, and bad user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-red-50 border border-red-100 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;