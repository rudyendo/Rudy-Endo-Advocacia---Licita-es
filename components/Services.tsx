import React from 'react';
import {
  FileSearch,
  AlertOctagon,
  Gavel,
  TrendingUp,
  FileSignature,
  ShieldAlert,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

const iconMap: Record<string, React.ReactNode> = {
  'analise-edital': <FileSearch className="w-7 h-7" aria-hidden="true" />,
  impugnacoes: <AlertOctagon className="w-7 h-7" aria-hidden="true" />,
  recursos: <Gavel className="w-7 h-7" aria-hidden="true" />,
  reequilibrio: <TrendingUp className="w-7 h-7" aria-hidden="true" />,
  'gestao-contratos': <FileSignature className="w-7 h-7" aria-hidden="true" />,
  sancoes: <ShieldAlert className="w-7 h-7" aria-hidden="true" />,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow-label text-[#912018] mb-3">
            {SERVICES_CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 text-balance">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONTENT.items.map((service) => (
            <article
              key={service.id}
              className="p-7 border border-slate-200 rounded-2xl bg-slate-50 hover:border-[#912018]/40 transition-colors"
            >
              <div className="text-[#912018] mb-5">{iconMap[service.id]}</div>
              <h3 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-700 leading-[1.65] text-base md:text-[17px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#1A1A1A] text-white p-7 sm:p-10 border border-slate-800 shadow-lg flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#912018]/20 text-[#e06c65] flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-[18px] sm:text-[19px] font-semibold text-white mb-2.5">
              {SERVICES_CONTENT.featured.title}
            </h3>
            <p className="text-slate-300 leading-[1.65] text-base md:text-[17px]">
              {SERVICES_CONTENT.featured.description}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('servicos')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-md text-base whitespace-nowrap w-full sm:w-auto"
          >
            <span>{SERVICES_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
