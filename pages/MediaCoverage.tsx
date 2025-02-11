import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MediaCoverage: NextPage = () => {
  const coverageLinks = [
    { title: "emojimix.online", url: "https://emojimix.online/" },
    { title: "blockblastsolver.online", url: "https://blockblastsolver.online/" },
    { title: "rice-purity-test.org", url: "https://rice-purity-test.org/" },
    { title: "geometrydashjp.com", url: "https://geometrydashjp.com/" },
    { title: "raadsrtest.net", url: "https://raadsrtest.net/" },
    { title: "controllertest.org", url: "https://controllertest.org/" },
    { title: "blockblastgame.net", url: "https://blockblastgame.net/" },
    { title: "run3.fun", url: "https://run3.fun/" },
    { title: "tiny-fishing.online", url: "https://tiny-fishing.online/" },
    { title: "grannyonline.net", url: "https://grannyonline.net/" },
    { title: "chill-guy-clicker.com", url: "https://chill-guy-clicker.com/" },
    { title: "funny-jokes.co", url: "https://funny-jokes.co/" },
    { title: "coreballjp.com", url: "https://coreballjp.com/" },
 { title: "csdn", url: "https://blog.csdn.net/a58220655/article/details/143534309" },
 { title: "2048-cupcakes", url: "https://2048-cupcakes.online/" },
];

  

  

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Media Coverage - sprunki phase </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Media Coverage About sprunki phase </h1>
        
        <p className="text-xl mb-12 max-w-2xl">
          Discover what the media is saying about sprunki phase and our innovative technology.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
          {coverageLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
              <p className="text-blue-500 hover:underline">Read Article</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MediaCoverage;