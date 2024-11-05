import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: NextPage = () => {
  const { t } = useTranslation('privacy');

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>{t('meta.title')}</title>
        <link rel="canonical" href="https://sprunkiphase.club/privacypolicy" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Header />
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-left">
        <h1 className="text-4xl font-bold mt-10 mb-6">{t('title')}</h1>
        
        <div className="w-full max-w-4xl">
          <p className="mb-4">{t('intro')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('contact.title')}</h2>
          <p>{t('contact.email')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('info.title')}</h2>
          <p>{t('info.description')}</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">{t('info.cookies.title')}</h3>
          <p>{t('info.cookies.description')}</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">{t('info.thirdParty.title')}</h3>
          <p>{t('info.thirdParty.description')}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">{t('children.title')}</h2>
          <p>{t('children.description')}</p>
          
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
    ...(await serverSideTranslations(locale, ['common', 'privacy'])),
  },
})

export default PrivacyPolicy;