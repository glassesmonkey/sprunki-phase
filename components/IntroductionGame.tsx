import { useTranslation } from 'next-i18next';
import { Sparkles } from 'lucide-react';

const IntroductionGame = () => {
  const { t } = useTranslation('common');

  return (
    <section className="w-full max-w-[768px] mt-6 sm:mt-8">
      <div className="bg-gradient-to-r from-purple-900/10 to-indigo-900/10 rounded-xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-purple-500 mr-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            {t('introduction.title')}
          </h1>
        </div>
        
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
          {t('introduction.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(t('introduction.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start space-x-2 text-gray-700 bg-white/50 p-3 rounded-lg"
            >
              <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionGame; 