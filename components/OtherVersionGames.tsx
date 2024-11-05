import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

interface GameVersion {
  id: string;
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  url: string;
  isExternal: boolean;
}

const OtherVersionGames = () => {
  const { t } = useTranslation('otherversiongame');
  const versions = t('versions', { returnObjects: true }) as GameVersion[];

  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {t('description')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((version) => (
            <div
              key={version.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {version.isExternal ? (
                <a
                  href={version.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <VersionCard version={version} />
                </a>
              ) : (
                <Link href={version.url}>
                  <VersionCard version={version} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VersionCard = ({ version }: { version: GameVersion }) => {
  // 从标题中提取版本号
  const phaseNumber = version.title.split(' ').pop();

  return (
    <div>
      <div className="relative h-48 w-full">
        {version.image ? (
          // 如果有图片，显示图片
          <Image
            src={version.image}
            alt={version.title}
            fill
            className="object-cover"
          />
        ) : (
          // 如果没有图片，显示渐变背景和版本号
          <div 
            className={`w-full h-full bg-gradient-to-r ${version.gradient || 'from-gray-400 to-gray-600'} flex items-center justify-center relative group`}
          >
            {/* 添加悬停效果 */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            {/* 版本号 */}
            <div className="relative">
              <span className="text-6xl font-bold text-white opacity-20 absolute -translate-x-1/2 -translate-y-1/2 blur-sm">
                {phaseNumber}
              </span>
              <span className="text-5xl font-bold text-white relative">
                {phaseNumber}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{version.title}</h3>
        <p className="text-gray-600">{version.description}</p>
      </div>
    </div>
  );
};

export default OtherVersionGames; 