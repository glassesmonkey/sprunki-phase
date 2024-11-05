import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import  Testimonials  from '../components/Testimonials';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GameTips from '../components/GameTips';
import FAQSection from '../components/FAQSection';
import GameGuide from '../components/GameGuide';
import BlockBlastSolver from '../components/BlockBlastSolver';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useRef } from 'react';
import IntroductionGame from '../components/IntroductionGame';
import OtherVersionGames from '../components/OtherVersionGames';


const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const canonicalUrl = `https://sprunkiphase.club${locale === defaultLocale ? '' : `/${locale}`}${pathname}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen px-4 sm:px-6'>
      <Head>

        <title>{t('meta.title')}</title>
        <link rel="canonical" href={canonicalUrl} />
        {/* <link rel="dns-prefetch" href="https://nos.sprunkiphase3.online"></link> */}

        {/* hreflang 标记 */}
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://sprunkiphase.club${l === defaultLocale ? '' : `/${l}`}${pathname}`}
          />
        ))}

        {/* x-default hreflang */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://sprunkiphase.club${pathname}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Sprunki Phase 3",
            "applicationCategory": "Game",
            "operatingSystem": "Any",
            "description": "Experience the most intense chapter of the Sprunki saga with Sprunki Phase 3. Dive into a revolutionary horror experience featuring extreme character transformations, dynamic soundscapes, and challenging nightmare mode gameplay.",
            "url": "https://sprunkiphase.club",
            "sameAs": [
              "https://discord.gg/sprunkiphase3",
              "https://twitter.com/SprunkiPhase3",
              "https://www.youtube.com/@SprunkiPhase3",
              "https://www.reddit.com/r/SprunkiPhase3/"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "gameItem": [
              {
                "@type": "Thing",
                "name": "Nightmare Mode"
              },
              {
                "@type": "Thing",
                "name": "Character Transformations"
              },
              {
                "@type": "Thing",
                "name": "Dynamic Soundscape"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Sprunki Games"
            },
            "datePublished": "2024-03-20",
            "inLanguage": ["en", "ja", "ko", "fr", "it"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2156"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Alex R."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Sprunki Phase 3 is a masterpiece of horror gaming. The character transformations and dynamic soundscape create an unforgettable nightmare experience that keeps you coming back for more!"
              }
            ],
            "gamePlatform": ["Web Browser", "Online"],
            "genre": ["Horror Game", "Action Game", "Adventure Game"]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "datePublished": "2024-03-20",
            "dateModified": "2024-03-20",
            "publisher": {
              "@type": "Organization",
              "name": "Sprunki Games"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Sprunki Phase 3?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sprunki Phase 3 is the most intense and terrifying chapter in the Sprunki saga. It's a revolutionary horror experience where characters undergo extreme transformations, soundscapes shift with your actions, and every decision could be your last in nightmare mode."
                }
              },
              {
                "@type": "Question",
                "name": "How do I enter Sprunki Phase 3?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To begin your descent into madness, drag the creepy eyeball icon to trigger Phase 3. Once activated, you'll experience character transformations, haunting soundscapes, and increasingly challenging scenarios in nightmare mode."
                }
              },
              {
                "@type": "Question",
                "name": "What makes nightmare mode special?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nightmare mode in Sprunki Phase 3 is our most intense experience yet. Characters transform into their most terrifying forms, the environment responds to your actions, and the soundscape shifts to match the growing horror."
                }
              },
              {
                "@type": "Question",
                "name": "How do character transformations work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Sprunki Phase 3, characters undergo extreme transformations as you progress through nightmare mode. Each transformation unlocks new abilities and challenges, but beware - with greater power comes greater horror."
                }
              },
              {
                "@type": "Question",
                "name": "Tell me about the soundscape",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The dynamic soundscape in Sprunki Phase 3 is a crucial part of the horror experience. Environmental sounds, character interactions, and haunting melodies combine to create an immersive atmosphere that responds to your actions."
                }
              },
              {
                "@type": "Question",
                "name": "How challenging is Sprunki Phase 3?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sprunki Phase 3 is designed to test your limits. The difficulty increases as you progress through nightmare mode, with each transformation and new scenario presenting greater challenges. But don't worry - the more you face your fears, the stronger you become!"
                }
              }
            ]
          })}
        </script>

      </Head>
      <Header />

      {/* 游戏加载框 - 直接显示iframe */}
      <div className='w-full flex flex-col items-center mt-4 sm:mt-10'>
        <div className='relative w-full max-w-[768px] h-[320px] sm:h-[573px] border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
          <iframe
            ref={iframeRef}
            src="https://wowtbc.net/sprunkin/phase1/index.html"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Sprunki Phase 3"
            onLoad={() => setIframeLoaded(true)}
            className={iframeLoaded ? 'opacity-100' : 'opacity-0'}
          />
          {!iframeLoaded && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/50"
              style={{
                backgroundImage: 'url(https://cdn.sprunkiphase3.online/phase1.jfif)',
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

      <IntroductionGame />
  <OtherVersionGames  />
      {/* 其他部分的移动端优化 */}
      <div className="w-full space-y-6 sm:space-y-8 mt-4 sm:mt-8">

        <FeaturesSection />
        <HowItWorksSection />
        <GameTips />
        <FAQSection />
        <Testimonials />
        <GameGuide />
      </div>

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
      ...(await serverSideTranslations(locale, ['common', 'otherversiongame'])),
    },
  };
};
export default Home;






