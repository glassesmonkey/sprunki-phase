import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import  Testimonials  from '../components/Testimonials-scratch';
import FeaturesSection from '../components/FeaturesSection-scratch';
import HowItWorksSection from '../components/HowItWorksSection-scratch';
import GameTips from '../components/GameTips-scratch';
import FAQSection from '../components/FAQSection-scratch';
import GameGuide from '../components/GameGuide-scratch';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useRef } from 'react';


const Home: NextPage = () => {
  const { t } = useTranslation('common-scratch');
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const canonicalUrl = `https://sprunkiphase3.online${locale === defaultLocale ? '' : `/${locale}`}${pathname}`;
  const [showGame, setShowGame] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);


  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
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
            href={`https://sprunkiphase3.online${l === defaultLocale ? '' : `/${l}`}${pathname}`}
          />
        ))}

        {/* x-default hreflang */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://sprunkiphase3.online${pathname}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": {
              "@language": "ja",
              "@value": "ジオメトリーダッシュオンライン"
            },
            "applicationCategory": "Game",
            "operatingSystem": "Any",
            "description": {
              "@language": "ja",
              "@value": "ジオメトリーダッシュオンラインは、無料で遊ぶ音楽リズムアクションゲームです。音楽に合わせたスリリングなゲームプレイを体験し、自分だけのレベルを作成し、様々なゲームモードで自分に挑戦しましょう。"
            },
            "url": "https://sprunkiphase3.online",
            "sameAs": [
              "https://sprunkiphase3.online/ja"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "JPY",
              "availability": "https://schema.org/InStock"
            },
            "gameItem": [
              {
                "@type": "Thing",
                "name": "キューブモード"
              },
              {
                "@type": "Thing",
                "name": "ボールモード"
              },
              {
                "@type": "Thing",
                "name": "UFOモード"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "sprunki phase 3 JP"
            },
            "datePublished": "2024-01-01",
            "inLanguage": ["ja"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "1024"
            },
            "review": [
              {
                "@type": "Review",
                "inLanguage": "ja",
                "author": {
                  "@type": "Person",
                  "name": "田中"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "ジオメトリーダッシュにハマって3ヶ月。最初は難しくて何度もくやしい思いをしたけど、クリアした時の達成感がたまらない！音楽もノリノリで、勉強の合間のストレス発散にぴったり。"
              }
            ],
            "gamePlatform": ["Web Browser", "Online"],
            "genre": ["Music Game", "Action Game", "Platform Game"]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "datePublished": "2024-10-01",
            "dateModified": "2024-10-28",
            "publisher": {
              "@type": "Organization",
              "name": "sprunki phase 3 JP"
            },
            "inLanguage": "ja",
            "mainEntity": [
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "ジオメトリーダッシュは難しいゲームですか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "初心者にも楽しめる易しいレベルから、上級者向けの難しいレベルまで幅広く用意されています。自分のペースで少しずつ挑戦していけば、誰でも楽しめるゲームです。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "ジオメトリーダッシュは無料でプレイできますか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "ブラウザ版（sprunkiphase3.online）では完全無料でプレイできます。インストール不要で、広告なしのスムーズな体験が可能です。その他、Lite版（基本機能のみ無料）や、全機能が使える有料版（モバイル約2ドル、PC約4ドル）もあります。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "オフラインでもプレイできますか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "はい、多くのレベルはオフラインでもプレイ可能です。ただし、オンラインの機能（カスタムレベルのダウンロードなど）を利用するにはインターネット接続が必要です。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "自分でレベルを作ることはできますか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "はい、ゲーム内のレベルエディターを使って自分だけのオリジナルレベルを作成できます。作ったレベルは他のプレイヤーと共有することも可能です。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "ジオメトリーダッシュのアップデートは頻繁にありますか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "開発者は定期的にアップデートを行い、新しい機能やレベルを追加しています。大型アップデートの間隔は変動しますが、コミュニティは常に新しいコンテンツを楽しみにしています。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "子供が遊んでも大丈夫ですか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "はい、ジオメトリーダッシュは子供から大人まで楽しめる健全なゲームです。難しいレベルもありますが、暴力的な表現などはありません。子供の集中力や反射神経を鍛えるのにも役立ちます。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "スクラッチジオメトリーダッシュとは何ですか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "プログラミング学習プラットフォーム「Scratch」で作られたファン制作バージョンです。ブラウザで無料プレイ可能で、プログラミング学習教材としても活用できます。コミュニティによる改良と共有が特徴です。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "ジオメトリーダッシュの作者は誰ですか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "スウェーデンの開発者Robert Topala（ロバート・トパラ）によって2013年に開発されました。RobTop Games社を設立し、現在も一人で開発を継続しています。元々は土木工学専攻でしたが、ゲーム開発への情熱から進路を変更し、定期的なアップデートを提供しています。"
                  }
                }
              },
              {
                "@type": "Question",
                "name": {
                  "@language": "ja",
                  "@value": "ジオメトリーダッシュメーカーとは何ですか？"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": {
                    "@language": "ja",
                    "@value": "ゲーム内の公式レベルエディター機能です。オリジナルレベルの作成、音楽との同期、障害物の配置、背景デザイン、エフェクト設定などが可能です。作成したレベルをオンラインで公開し、他プレイヤーと共有することもできます。"
                  }
                }
              }
            ]
          })}
        </script>

      </Head>
      <Header />

      {/* 游戏加载框 */}
      <div className='w-full flex flex-col items-center mt-10'>
        <div 
          className='relative w-full max-w-[768px] h-[320px] md:h-[573px] border border-gray-300 rounded-lg shadow-lg'
          onClick={() => setShowGame(true)}
        >
          {!showGame ? (
            <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 cursor-pointer'>
              <img
                src="https://cdn.sprunkiphase3.online/scratch-ver.webp"
                alt="Game Cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                className='bg-blue-500 text-white font-medium px-6 py-3 rounded hover:bg-blue-400 transition duration-300 ease-in-out z-10'
              >
                Start Game
              </button>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              src="https://cdn.sprunkiphase3.online/Geometry-Dash-scratch.html"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="HTML Game"
              onLoad={() => setIframeLoaded(true)}
              className={iframeLoaded ? '' : 'hidden'}
            ></iframe>
          )}
        </div>
        
        {/* ゲーム説明セクション */}
        <div className="mt-8 max-w-[768px] w-full bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-indigo-700">ゲーム操作ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-lg text-indigo-600 mb-2">基本操作</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium">ジャンプ:</span> スペース、W、上矢印、Ctrlまたはマウスクリック</li>
                <li><span className="font-medium">一時停止:</span> Pキー</li>
                <li><span className="font-medium">特殊効果切替:</span> Lキー</li>
                <li><span className="font-medium">再起動:</span> 緑の旗をクリック</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-lg text-indigo-600 mb-2">ゲームのヒント</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>scratch版のsprunki phase 3だけではなく原作も遊んでみてください!!
                </li>
                <li>～アップデート速報欄～</li>
                <li>2020/06/13:共有
ランキングデータのリセット
</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-center text-indigo-600 font-medium">楽しんでプレイしてください！</p>
        </div>
        
        {/* 簡単バージョンへのリンクボタン */}
        <div className="mt-6 w-full max-w-[768px]">
          <button
            onClick={() => router.push('/geometrydash-easy-version')}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              ゲームが難しいと感じたら、簡単バージョンをお試しください
            </span>
          </button>
        </div>
      </div>




      <FeaturesSection />
      <HowItWorksSection />
      <GameTips />
      <FAQSection />
      <Testimonials />
      <GameGuide />
      <Footer />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  if (!locale) {
    throw new Error('Locale is not defined');
  }
  const translations = await serverSideTranslations(locale, ['common-scratch','common']);
  console.log('Loaded translations:', translations);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common-scratch','common'])),
    },
  };
};
export default Home;






