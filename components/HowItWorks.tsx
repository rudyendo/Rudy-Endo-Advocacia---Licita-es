import React from 'react';
import { HOW_IT_WORKS_CONTENT } from '../src/content';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow-label text-[#912018] mb-3">
            {HOW_IT_WORKS_CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 text-balance">
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-2xl p-7"
            >
              <span className="inline-block num-display text-3xl text-[#912018] mb-4">
                {step.number}
              </span>
              <h3 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-700 leading-[1.65] text-base md:text-[17px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
