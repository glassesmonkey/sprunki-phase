import { useTranslation } from 'next-i18next';
import { Gamepad, Music, Wand2, Zap, Users } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center order-2 lg:order-1 lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-center md:mb-10 md:text-5xl lg:mb-12">
            {t('features.title')}
          </h2>
          <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
            <li className="flex flex-col p-5">
              <Gamepad className="mb-4 inline-block rounded-full" size={40} />
              <p className="mb-4 font-semibold">{t('features.gameplay.title')}</p>
              <p className="text-sm text-gray-500">
                {t('features.gameplay.description')}
              </p>
            </li>
            <li className="flex flex-col p-5">
              <Music className="mb-4 inline-block rounded-full" size={40} />
              <p className="mb-4 font-semibold">{t('features.music.title')}</p>
              <p className="text-sm text-gray-500">
                {t('features.music.description')}
              </p>
            </li>
            <li className="flex flex-col p-5">
              <Wand2 className="mb-4 inline-block rounded-full" size={40} />
              <p className="mb-4 font-semibold">{t('features.characters.title')}</p>
              <p className="text-sm text-gray-500">
                {t('features.characters.description')}
              </p>
            </li>
            <li className="flex flex-col p-5">
              <Zap className="mb-4 inline-block rounded-full" size={40} />
              <p className="mb-4 font-semibold">{t('features.evolution.title')}</p>
              <p className="text-sm text-gray-500">
                {t('features.evolution.description')}
              </p>
            </li>
            <li className="flex flex-col p-5">
              <Users className="mb-4 inline-block rounded-full" size={40} />
              <p className="mb-4 font-semibold">{t('features.community.title')}</p>
              <p className="text-sm text-gray-500">
                {t('features.community.description')}
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 lg:w-1/2">
          <img
            src="https://cdn.sprunkiphase3.online/sprunki-phase-series.webp"
            alt={t('features.mainImage.alt')}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
