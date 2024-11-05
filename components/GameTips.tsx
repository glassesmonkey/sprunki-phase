import React from 'react';
import { useTranslation } from 'next-i18next';
import { Skull, Ghost, Eye, Heart, Lightbulb } from 'lucide-react';

const GameTips = () => {
  const { t } = useTranslation('common');

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          {t('gameTips.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('gameTips.description')}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {[
          { key: 'survival', icon: <Heart className="mb-4 h-14 w-14" /> },
          { key: 'transformation', icon: <Ghost className="mb-4 h-14 w-14" /> },
          { key: 'observation', icon: <Eye className="mb-4 h-14 w-14" /> },
          { key: 'mastery', icon: <Skull className="mb-4 h-14 w-14" /> },
          { key: 'strategy', icon: <Lightbulb className="mb-4 h-14 w-14" /> }
        ].map(({ key, icon }) => (
          <div key={key} className="flex flex-col items-center p-8 text-center bg-gray-900/5 rounded-lg">
            {React.cloneElement(icon, { className: `${icon.props.className} text-purple-600` })}
            <p className="mb-4 text-xl font-bold">{t(`gameTips.${key}.title`)}</p>
            <p className="text-sm text-gray-500">{t(`gameTips.${key}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameTips;
