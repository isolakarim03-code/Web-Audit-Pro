import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { LeadFormData, FormStatus, AssessmentResponse } from '../types';
import { generateInstantAssessment } from '../services/geminiService';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    websiteUrl: '',
    businessType: 'e-commerce'
  });
  
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [result, setResult] = useState<AssessmentResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    
    try {
      // Submit to Formspree and Generate AI Assessment in parallel
      const [formResponse, aiResponse] = await Promise.all([
        fetch("https://formspree.io/f/xbdlwwkv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        }),
        generateInstantAssessment(formData)
      ]);

      if (!formResponse.ok) {
        throw new Error("Form submission failed");
      }

      setResult(aiResponse);
      setStatus(FormStatus.SUCCESS);
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus(FormStatus.ERROR);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === FormStatus.SUCCESS && result) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up border border-green-100">
        <div className="bg-green-600 p-6 text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white">Application Received!</h3>
          <p className="text-green-100 mt-2">We will email your detailed PDF report to {formData.email} shortly.</p>
        </div>
        <div className="p-8">
          <h4 className="text-xl font-bold text-slate-800 mb-4">While you wait, here is an AI-generated instant insight:</h4>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
            <p className="text-slate-700 italic mb-4">"{result.summary}"</p>
            <div className="space-y-3">
              {result.tips.map((tip, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-slate-500">
            One of our senior strategists is reviewing your site now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
      <div className="bg-slate-900 p-6 text-center">
        <h3 className="text-2xl font-bold text-white">Request Your Free Assessment</h3>
        <p className="text-slate-400 text-sm mt-2">Get actionable insights in less than 24 hours.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input 
            required
            name="fullName"
            type="text" 
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input 
            required
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="john@business.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
          <input 
            required
            name="websiteUrl"
            type="url" 
            value={formData.websiteUrl}
            onChange={handleChange}
            placeholder="https://www.yourbusiness.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
          <div className="relative">
            <select 
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-white"
            >
              <option value="e-commerce">E-Commerce / Retail</option>
              <option value="service-provider">Service Provider (Lawyer, Plumber, etc.)</option>
              <option value="saas">SaaS / Tech</option>
              <option value="coach-consultant">Coach / Consultant</option>
              <option value="local-business">Local Business (Restaurant, Gym, etc.)</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={status === FormStatus.SUBMITTING}
          className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg text-lg shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === FormStatus.SUBMITTING ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing Website...
            </>
          ) : (
            <>
              Analyze My Website for Free
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-400">
          We respect your privacy. No spam, just value.
        </p>

        {status === FormStatus.ERROR && (
          <div className="flex items-center gap-2 text-red-600 text-sm justify-center bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again.
          </div>
        )}

      </form>
    </div>
  );
};

export default LeadForm;