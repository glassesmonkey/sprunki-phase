import React from 'react';
import { useTranslation } from 'next-i18next';
import { Star, Heart, Music, Gamepad, PartyPopper, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation('common');

  const testimonials = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6'];
  const icons = [Star, Heart, Music, Gamepad, PartyPopper, Sparkles];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32" aria-labelledby="testimonials-title">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 id="testimonials-title" className="mb-4 text-3xl font-bold md:text-5xl">
          {t('testimonials.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('testimonials.subtitle')}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const Icon = icons[index];
          return (
            <div key={testimonial} className="flex flex-col items-center p-8 text-center bg-gray-900/5 rounded-lg hover:bg-purple-50 transition-colors">
              <div className="mb-4 rounded-full bg-purple-100 p-2">
                <Icon className="h-12 w-12 text-purple-600" />
              </div>
              <p className="mb-4 text-sm italic text-gray-600">
                "{t(`testimonials.${testimonial}.content`)}"
              </p>
              <p className="text-base font-semibold">
                {t(`testimonials.${testimonial}.name`)}
              </p>
              <p className="text-sm text-gray-500">
                {t(`testimonials.${testimonial}.location`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
