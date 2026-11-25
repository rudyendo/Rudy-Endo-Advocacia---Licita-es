import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RISKS_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const Risks: React.FC = () => {
  return (
    <section id="riscos" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow-label text-[#912018] mb-3">
            {RISKS_CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight text-balance">
            {RISKS_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mt-5 mb-5" />
          <p className="text-base md:text-[17px] text-slate-700 leading-[1.65]">
            {RISKS_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {RISKS_CONTENT.items.map((item) => (
            <article
              key={item.number}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-xs"
            >
              <span className="num-display text-xl text-[#912018] shrink-0 leading-snug pt-0.5">
                {item.number}
              </span>
              <div>
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-[1.65] text-base md:text-[17px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="text-base md:text-[17px] text-slate-200 leading-[1.65] max-w-2xl">
            {RISKS_CONTENT.closingLine}
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('riscos')}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-base whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            <span>{RISKS_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
