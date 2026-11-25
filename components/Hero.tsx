import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { HERO_CONTENT, SITE_CONFIG, getUrgentWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-[620px] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#1A1A1A] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 z-0">
        {!imgError && SITE_CONFIG.BRANDING.heroImageUrl && (
          <img
            src={SITE_CONFIG.BRANDING.heroImageUrl}
            alt="Advocacia especializada em licitações e contratos públicos"
            width={1600}
            height={900}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover opacity-75 brightness-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/65 to-[#1A1A1A]/20" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow-label text-[#e06c65] mb-6">
            {HERO_CONTENT.badge}
          </p>

          <h1 className="text-[clamp(2rem,4.3vw,3.65rem)] font-semibold text-white leading-[1.12] mb-6 text-balance">
            {HERO_CONTENT.titleLine1}
            <span className="block text-[#e06c65] mt-1.5">
              {HERO_CONTENT.titleLine2}
            </span>
          </h1>

          <p className="text-base md:text-[17px] text-slate-300 mb-9 leading-[1.65] max-w-2xl">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={getUrgentWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-lg text-base text-center sm:whitespace-nowrap shrink-0"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#checklist"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-white/5 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/10 transition-colors text-base text-center sm:whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          <p className="mt-7 text-sm sm:text-[15px] text-slate-300 leading-[1.65]">
            {HERO_CONTENT.supportItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <span aria-hidden="true" className="mx-2 text-slate-500">
                    ·
                  </span>
                )}
                <span>✓ {item}</span>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
