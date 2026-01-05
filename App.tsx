import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ValueGrid from './components/ValueGrid';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import { ShieldCheck, Star } from 'lucide-react';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="absolute top-0 w-full z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            WebAudit Pro
          </div>
          <button onClick={scrollToForm} className="hidden md:block px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium transition-all">
            Get Free Audit
          </button>
        </div>
      </nav>

      <Hero scrollToForm={scrollToForm} />
      
      <ProblemSection />
      
      <ValueGrid />
      
      {/* Why Choose Us / Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Trusted By Growing Businesses</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos */}
             <div className="text-2xl font-black text-slate-800">TECH<span className="text-indigo-600">FLOW</span></div>
             <div className="text-2xl font-serif text-slate-800 italic">LaBouche</div>
             <div className="text-2xl font-mono text-slate-800">Build<span className="font-light">Right</span></div>
             <div className="text-2xl font-bold text-slate-800 flex gap-1"><span className="w-6 h-6 bg-slate-800 rounded-full"></span>Focus</div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl">
               <div className="flex text-yellow-400 mb-3 justify-center"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
               <p className="text-slate-600 italic mb-4">"The audit opened my eyes. We fixed the 3 things they pointed out and saw a 20% bump in leads the next week."</p>
               <p className="font-bold text-slate-900">- Sarah Jenkins, Retail Owner</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
               <div className="flex text-yellow-400 mb-3 justify-center"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
               <p className="text-slate-600 italic mb-4">"Professional, fast, and actually useful. Not just a generic automated report. Highly recommend."</p>
               <p className="font-bold text-slate-900">- Mark T., SaaS Founder</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
               <div className="flex text-yellow-400 mb-3 justify-center"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
               <p className="text-slate-600 italic mb-4">"I didn't realize how slow my mobile site was until this assessment. Life saver."</p>
               <p className="font-bold text-slate-900">- Elena R., Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conversion Section */}
      <section ref={formRef} className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Guessing. Start Growing.</h2>
               <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                 Every day your website underperforms, you lose potential revenue. 
                 It takes less than 60 seconds to request your roadmap to success.
               </p>
            </div>
            <LeadForm />
         </div>
      </section>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-2xl md:hidden transition-transform duration-300 z-50 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={scrollToForm}
          className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg"
        >
          Get My Free Assessment
        </button>
      </div>
    </div>
  );
};

export default App;