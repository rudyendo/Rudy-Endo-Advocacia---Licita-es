import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCE_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const TargetAudience: React.FC = () => {
  return (
    <section id="para-quem" className="py-20 lg:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow-label text-[#e06c65] mb-3">
            {TARGET_AUDIENCE_CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight text-balance">
            {TARGET_AUDIENCE_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TARGET_AUDIENCE_CONTENT.cards.map((card) => (
            <article
              key={card.id}
              className="rounded-2xl bg-[#1A1A1A] border border-white/10 p-7 flex flex-col justify-between gap-6"
            >
              <div>
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-[1.65] text-base md:text-[17px]">
                  {card.description}
                </p>
              </div>

              {card.ctaLabel && (
                <div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('para_quem_parceria')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-base whitespace-nowrap w-full sm:w-auto"
                  >
                    <span>{card.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
