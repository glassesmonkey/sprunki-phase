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
  const [showIframe, setShowIframe] = useState(false);
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
            "name": "Sprunki Phase",
            "applicationCategory": "Game",
            "operatingSystem": "Any",
            "description": "Discover the amazing world of Sprunki Phase - a series of 10 unique games where music, adventure, and creativity come together! From fun beginnings to musical mastery, each phase brings new excitement. Perfect for players of all ages!",
            "url": "https://sprunkiphase.club",
            "sameAs": [
              "https://discord.gg/sprunkiphase",
              "https://twitter.com/SprunkiPhase",
              "https://www.youtube.com/@SprunkiPhase",
              "https://www.reddit.com/r/SprunkiPhase/"
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
                "name": "Music Creation"
              },
              {
                "@type": "Thing",
                "name": "Character Transformations"
              },
              {
                "@type": "Thing",
                "name": "Interactive Gameplay"
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
                "reviewBody": "Sprunki Phase is amazing! Each game brings something new and exciting. From making music to going on adventures, there's always something fun to do. Perfect for the whole family!"
              }
            ],
            "gamePlatform": ["Web Browser", "Online"],
            "genre": ["Music Game", "Adventure Game", "Creative Game"]
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
                "name": "What is Sprunki Phase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sprunki Phase is a series of 10 amazing games that combine music, adventure, and creativity. Each phase offers unique experiences, from making music to exploring magical worlds. Perfect for players of all ages!"
                }
              },
              {
                "@type": "Question",
                "name": "How do I start playing Sprunki Phase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can start with any Sprunki Phase game! Each one is easy to learn and fun to play. Just click and drag to interact, use your keyboard for special moves, and let your creativity flow!"
                }
              },
              {
                "@type": "Question",
                "name": "What makes each phase special?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each Sprunki Phase game has its own unique features. Phase 1-2 are great for beginners, Phase 3-4 add excitement, Phase 5-6 focus on music creation, Phase 7-8 are perfect for mobile play, and Phase 9-10 combine everything into amazing adventures!"
                }
              },
              {
                "@type": "Question",
                "name": "Can I play with friends?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Many Sprunki Phase games have multiplayer features. You can create music together, share your creations, and help each other discover new things!"
                }
              },
              {
                "@type": "Question",
                "name": "Do I need music experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all! Sprunki Phase games are designed for everyone. The intuitive controls and helpful guides make it easy to start creating and playing, no matter your experience level."
                }
              },
              {
                "@type": "Question",
                "name": "What can I create in Sprunki Phase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The possibilities are endless! Create music, design characters, solve puzzles, and go on adventures. Each Sprunki Phase game gives you new ways to express your creativity and have fun!"
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
          {!showIframe ? (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/50"
              style={{
                backgroundImage: 'url(https://cdn.sprunkiphase3.online/phase1.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-center">
                <h2 className="text-white text-xl mb-4">{t('game.clickToPlay')}</h2>
                <button
                  onClick={() => setShowIframe(true)}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {t('game.playNow')}
                </button>
              </div>
            </div>
          ) : (
            <>
              <iframe
                ref={iframeRef}
                src="https://wowtbc.net/sprunkin/phase1/index.html"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Sprunki Phase"
                onLoad={() => setIframeLoaded(true)}
                className={iframeLoaded ? 'opacity-100' : 'opacity-0'}
              />
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
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
            </>
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






