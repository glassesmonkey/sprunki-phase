import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    'whatIs',
    'howToStart',
    'phases',
    'gameplay',
    'multiplayer',
    'progress',
    'help'
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="w-8 h-8 text-purple-500" />
          <h2 className="text-3xl font-bold md:text-5xl">
            {t('faq.mainTitle')}
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('faq.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, index) => (
          <div 
            key={faq} 
            className="mb-4 border border-purple-100 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-purple-50/50 hover:bg-purple-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-left text-lg font-semibold">
                {t(`faq.${faq}.question`)}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-purple-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-purple-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{t(`faq.${faq}.answer`)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          {t('faq.needHelp')}
          <a 
            href="mailto:support@sprunkiphase.com" 
            className="text-purple-500 hover:text-purple-600 ml-1"
          >
            {t('faq.contactSupport')}
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
