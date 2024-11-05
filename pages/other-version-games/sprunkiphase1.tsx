import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useRef } from 'react';
import IntroductionOtherVersionGame from '../../components/IntroductionOtherVersionGame';
import OtherVersionGames from '../../components/OtherVersionGames';

const SprunkiPhase1: NextPage = () => {
  const { t } = useTranslation(['common', 'otherversiongamepage']);
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const canonicalUrl = `https://sprunkiphase.club${locale === defaultLocale ? '' : `/${locale}`}${pathname}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // 使用 otherversiongamepage 命名空间获取配置
  const gameConfig = t('phase1.gameConfig', { ns: 'otherversiongamepage', returnObjects: true }) as {
    iframeSrc: string;
    loadingImage: string;
    title: string;
    description: string;
  };

  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen px-4 sm:px-6'>
      <Head>
        <title>{gameConfig.title}</title>
        <meta name="description" content={gameConfig.description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://sprunkiphase.club${l === defaultLocale ? '' : `/${l}`}${pathname}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://sprunkiphase.club${pathname}`}
        />
      </Head>
      
      <Header />

      <div className='w-full flex flex-col items-center mt-4 sm:mt-10'>
        <div className='relative w-full max-w-[768px] h-[320px] sm:h-[573px] border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
          <iframe
            ref={iframeRef}
            src={gameConfig.iframeSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Sprunki Phase 1"
            onLoad={() => setIframeLoaded(true)}
            className={iframeLoaded ? 'opacity-100' : 'opacity-0'}
          />
          {!iframeLoaded && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/50"
              style={{
                backgroundImage: `url(${gameConfig.loadingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-full">
                <div className="animate-pulse text-purple-400">
                  <svg className="w-12 h-12 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <IntroductionOtherVersionGame phase="phase1" />
      <OtherVersionGames />

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  if (!locale) {
    throw new Error('Locale is not defined');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'otherversiongame', 'otherversiongamepage'])),
    },
  };
};

export default SprunkiPhase1;






