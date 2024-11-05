import React from 'react';
import { useTranslation } from 'next-i18next';
import { Gamepad, Star, Music, Users, Wand2, Sparkles, HelpCircle } from 'lucide-react';

const GameGuide = () => {
  const { t } = useTranslation('common');

  const sections = [
    'basics',
    'music',
    'adventure',
    'multiplayer',
    'special',
    'advanced',
    'help'
  ];

  const icons = {
    basics: <Gamepad className="h-6 w-6 text-purple-600" />,
    music: <Music className="h-6 w-6 text-purple-600" />,
    adventure: <Star className="h-6 w-6 text-purple-600" />,
    multiplayer: <Users className="h-6 w-6 text-purple-600" />,
    special: <Wand2 className="h-6 w-6 text-purple-600" />,
    advanced: <Sparkles className="h-6 w-6 text-purple-600" />,
    help: <HelpCircle className="h-6 w-6 text-purple-600" />
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          {t('gameGuide.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('gameGuide.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {sections.map((section) => (
          <div key={section} className="mb-8 p-6 bg-gray-900/5 rounded-lg hover:bg-purple-50 transition-colors">
            <div className="flex items-center mb-4">
              {icons[section as keyof typeof icons]}
              <h3 className="ml-3 text-2xl font-bold">
                {t(`gameGuide.${section}.title`)}
              </h3>
            </div>
            <p className="mb-4 text-gray-600">
              {t(`gameGuide.${section}.description`)}
            </p>
            <ul className="space-y-2">
              {(t(`gameGuide.${section}.tips`, { returnObjects: true }) as string[]).map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-purple-500">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameGuide;
