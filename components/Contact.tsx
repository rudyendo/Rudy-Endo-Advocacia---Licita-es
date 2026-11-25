import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import {
  CONTACT_CONTENT,
  SITE_CONFIG,
  getUrgentWhatsAppUrl,
  getWhatsAppUrl,
} from '../src/content';
import {
  formatCnpjMask,
  formatWhatsAppMask,
  getUtmParams,
  isValidWhatsApp,
  submitLeadForm,
  trackGenerateLead,
  trackWhatsAppClick,
} from '../src/tracking';

interface ContactProps {
  onOpenPrivacy: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cidadeUf, setCidadeUf] = useState('');
  const [porte, setPorte] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [assunto, setAssunto] = useState('');
  const [prazoCorrendo, setPrazoCorrendo] = useState('');
  const [dataPrazo, setDataPrazo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const utms = getUtmParams();
  const isShortDeadline = prazoCorrendo === CONTACT_CONTENT.urgentDeadlineValue;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (honeypot) {
      return;
    }

    if (
      !nome.trim() ||
      !whatsapp.trim() ||
      !empresa.trim() ||
      !cidadeUf.trim() ||
      !assunto
    ) {
      setErrorMsg('Preencha todos os campos obrigatórios marcados com *.');
      return;
    }

    if (!isValidWhatsApp(whatsapp)) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD.');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    if (!consent) {
      setErrorMsg('É necessário concordar com a Política de Privacidade.');
      return;
    }

    setLoading(true);
    try {
      await submitLeadForm({
        origem: 'licitacoes-contato',
        pagina: 'licitacoes',
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        empresa: empresa.trim(),
        cnpj: cnpj.trim(),
        cidade_uf: cidadeUf.trim(),
        porte,
        experiencia,
        assunto,
        prazo_correndo: prazoCorrendo,
        data_prazo: dataPrazo,
        mensagem: mensagem.trim(),
        lgpd_consent: true,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
      });
      trackGenerateLead(prazoCorrendo);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error && err.message === 'ENDPOINT_NOT_CONFIGURED') {
        setErrorMsg(
          'O envio automático do formulário ainda está em configuração. Por favor, fale diretamente pelo WhatsApp.'
        );
      } else {
        setErrorMsg(
          'Não foi possível enviar sua mensagem agora. Tente novamente ou chame no WhatsApp.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-5/12">
            <p className="eyebrow-label text-[#e06c65] mb-3">
              {CONTACT_CONTENT.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white text-balance">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-slate-300 mb-10 text-base md:text-[17px] leading-[1.65]">
              {CONTACT_CONTENT.description}
            </p>

            <div className="space-y-5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contato_canal')}
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:underline">
                    {SITE_CONFIG.CONTACT_INFO.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.CONTACT_INFO.email}`}
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    E-mail
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:underline break-all">
                    {SITE_CONFIG.CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    Endereço
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:underline leading-relaxed">
                    {SITE_CONFIG.CONTACT_INFO.address}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    Horário de atendimento
                  </p>
                  <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                    {SITE_CONFIG.CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl text-slate-900">
              {submitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 bg-[#912018]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-9 h-9 text-[#912018]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                    {CONTACT_CONTENT.thankYou.title}
                  </h3>
                  <p className="text-slate-700 mb-8 max-w-md mx-auto leading-[1.65] text-base md:text-[17px]">
                    {CONTACT_CONTENT.thankYou.text}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={isShortDeadline ? getUrgentWhatsAppUrl() : getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contato_obrigado')}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-base w-full sm:w-auto"
                    >
                      <span>{CONTACT_CONTENT.thankYou.whatsappLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-slate-600 hover:text-slate-900 underline py-2"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <input type="hidden" name="origem" value="licitacoes-contato" />
                  <input type="hidden" name="pagina" value="licitacoes" />
                  <input type="hidden" name="utm_source" value={utms.utm_source} />
                  <input type="hidden" name="utm_medium" value={utms.utm_medium} />
                  <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-nome"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Nome *
                      </label>
                      <input
                        id="contato-nome"
                        name="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-whatsapp"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        WhatsApp *
                      </label>
                      <input
                        id="contato-whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(formatWhatsAppMask(e.target.value))}
                        placeholder="(84) 90000-0000"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        E-mail
                      </label>
                      <input
                        id="contato-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@empresa.com.br"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-empresa"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Empresa *
                      </label>
                      <input
                        id="contato-empresa"
                        name="empresa"
                        type="text"
                        required
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder="Razão social ou nome fantasia"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-cnpj"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        CNPJ (opcional)
                      </label>
                      <input
                        id="contato-cnpj"
                        name="cnpj"
                        type="text"
                        inputMode="numeric"
                        value={cnpj}
                        onChange={(e) => setCnpj(formatCnpjMask(e.target.value))}
                        placeholder="00.000.000/0000-00"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-cidade"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Cidade/UF *
                      </label>
                      <input
                        id="contato-cidade"
                        name="cidade_uf"
                        type="text"
                        required
                        value={cidadeUf}
                        onChange={(e) => setCidadeUf(e.target.value)}
                        placeholder="Ex: Natal/RN"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-porte"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Porte
                      </label>
                      <select
                        id="contato-porte"
                        name="porte"
                        value={porte}
                        onChange={(e) => setPorte(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      >
                        <option value="">Selecione</option>
                        {CONTACT_CONTENT.porteOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contato-experiencia"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Experiência com licitações
                      </label>
                      <select
                        id="contato-experiencia"
                        name="experiencia"
                        value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      >
                        <option value="">Selecione</option>
                        {CONTACT_CONTENT.experienceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-assunto"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Assunto principal *
                    </label>
                    <select
                      id="contato-assunto"
                      name="assunto"
                      required
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                    >
                      <option value="" disabled>
                        Selecione o assunto
                      </option>
                      {CONTACT_CONTENT.subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-prazo"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Existe prazo correndo?
                      </label>
                      <select
                        id="contato-prazo"
                        name="prazo_correndo"
                        value={prazoCorrendo}
                        onChange={(e) => setPrazoCorrendo(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      >
                        <option value="">Selecione</option>
                        {CONTACT_CONTENT.deadlineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contato-data-prazo"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Data da sessão ou do prazo
                      </label>
                      <input
                        id="contato-data-prazo"
                        name="data_prazo"
                        type="date"
                        value={dataPrazo}
                        onChange={(e) => setDataPrazo(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-mensagem"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contato-mensagem"
                      name="mensagem"
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Conte brevemente o que está acontecendo na licitação ou no contrato (órgão, número do edital/pregão, fase atual)"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-base"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="contato-consent"
                      name="lgpd_consent"
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-400 text-[#912018] focus:ring-[#912018] shrink-0"
                    />
                    <label
                      htmlFor="contato-consent"
                      className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      Li e concordo com a{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="underline text-[#912018] hover:text-[#451F19] font-semibold"
                      >
                        Política de Privacidade
                      </button>{' '}
                      *
                    </label>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm flex items-start gap-2.5"
                    >
                      <AlertCircle
                        className="w-4 h-4 text-[#912018] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p>{errorMsg}</p>
                        <a
                          href={isShortDeadline ? getUrgentWhatsAppUrl() : getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('contato_erro')}
                          className="inline-block mt-1 font-semibold underline text-[#912018]"
                        >
                          Falar no WhatsApp agora
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors flex items-center justify-center gap-2.5 shadow-md disabled:opacity-70 text-base"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>{CONTACT_CONTENT.submitLabel}</span>
                        <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  {isShortDeadline && (
                    <div
                      role="status"
                      className="p-4 rounded-xl bg-[#912018]/10 border border-[#912018]/30 text-slate-900 flex items-start gap-3"
                    >
                      <AlertTriangle
                        className="w-5 h-5 text-[#912018] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-sm sm:text-base leading-relaxed">
                        <a
                          href={getUrgentWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('contato_prazo_urgente')}
                          className="font-semibold text-[#912018] hover:text-[#451F19] underline underline-offset-4"
                        >
                          {CONTACT_CONTENT.urgentWarningText}
                        </a>
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 text-center pt-1">
                    {CONTACT_CONTENT.microtextPrefix}{' '}
                    <a
                      href={getUrgentWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contato_microtexto')}
                      className="font-semibold text-[#912018] underline hover:text-[#451F19]"
                    >
                      {CONTACT_CONTENT.microtextLink}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
