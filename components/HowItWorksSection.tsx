import { useTranslation } from 'next-i18next';
import { Play, Mouse, Keyboard, Star } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            {t('howItWorks.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            {t('howItWorks.description')}
          </p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Play className="mb-4 h-12 w-12 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">{t('howItWorks.step1.title')}</h3>
            <p className="text-sm text-gray-600">{t('howItWorks.step1.description')}</p>
          </div>
          
          <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Mouse className="mb-4 h-12 w-12 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">{t('howItWorks.step2.title')}</h3>
            <p className="text-sm text-gray-600">{t('howItWorks.step2.description')}</p>
          </div>
          
          <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Keyboard className="mb-4 h-12 w-12 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">{t('howItWorks.step3.title')}</h3>
            <p className="text-sm text-gray-600">{t('howItWorks.step3.description')}</p>
          </div>
          
          <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Star className="mb-4 h-12 w-12 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">{t('howItWorks.step4.title')}</h3>
            <p className="text-sm text-gray-600">{t('howItWorks.step4.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
