import React from 'react';
import { ArrowRight, CheckCircle2, TrendingDown } from 'lucide-react';

interface HeroProps {
  scrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToForm }) => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-900 text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Limited Free Spots Available This Week
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Your Website Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Costing You Customers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We analyze your design, speed, and messaging to show you exactly 
              what’s killing your conversions—and how to fix it for free.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 group"
              >
                Get My Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                No credit card required
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative bg-slate-800 rounded-xl border border-slate-700 shadow-2xl p-4 md:p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Mockup UI */}
               <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-slate-900 h-6 rounded-md ml-4"></div>
               </div>
               <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2/3 h-32 bg-slate-700/50 rounded animate-pulse"></div>
                    <div className="w-1/3 space-y-2">
                        <div className="h-8 bg-slate-700/50 rounded w-full"></div>
                        <div className="h-8 bg-slate-700/50 rounded w-2/3"></div>
                        <div className="h-8 bg-slate-700/50 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="h-24 bg-slate-700/30 rounded border-l-4 border-red-500 p-3 flex items-start gap-3">
                     <TrendingDown className="text-red-500 w-6 h-6 flex-shrink-0" />
                     <div>
                        <div className="h-4 bg-slate-600 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-slate-600/50 rounded w-full mb-1"></div>
                        <div className="h-2 bg-slate-600/50 rounded w-3/4"></div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Audit Complete</p>
                    <p className="text-xs text-slate-500">3 Critical Fixes Found</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;