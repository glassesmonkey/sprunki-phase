import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService: NextPage = () => {
  const { t } = useTranslation('terms');

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>{t('meta.title')}</title>
        <link rel="canonical" href="https://sprunkiphase.club/terms-of-service" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Header />
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-left">
        <h1 className="text-4xl font-bold mt-10 mb-6">{t('title')}</h1>
        
        <div className="w-full max-w-4xl">
          <p className="mb-4">{t('intro')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('service.title')}</h2>
          <p>{t('service.description')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('content.title')}</h2>
          <p>{t('content.description')}</p>
          <ul className="list-disc list-inside mb-4">
            {Array.from({ length: 4 }, (_, i) => (
              <li key={i}>{t(`content.rules.${i}`)}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('availability.title')}</h2>
          <p>{t('availability.description')}</p>
          <p>{t('availability.interruptions')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('liability.title')}</h2>
          <p>{t('liability.description')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('governing.title')}</h2>
          <p>{t('governing.description')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('changes.title')}</h2>
          <p>{t('changes.description')}</p>
          
          <p className="mt-6">{t('lastUpdated')}: {t('updateDate')}</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'terms'])),
  },
})

export default TermsOfService;