import { useTranslation } from 'next-i18next';

interface Feature {
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Review {
  content: string;
  author: string;
  rating: number;
}

interface GameContent {
  title: string;
  whatIs: {
    title: string;
    description: string;
  };
  keyFeatures: {
    title: string;
    features: Feature[];
  };
  howToPlay: {
    title: string;
    steps: Step[];
  };
  gameTips: {
    title: string;
    tips: string[];
  };
  faq: {
    title: string;
    questions: FAQ[];
  };
  testimonials: {
    title: string;
    reviews: Review[];
  };
}

interface Props {
  phase: string;
}

const IntroductionOtherVersionGame = ({ phase }: Props) => {
  const { t } = useTranslation('otherversiongamepage');
  const content = t(`${phase}`, { returnObjects: true }) as GameContent;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* What Is Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.whatIs.title}</h2>
        <p className="text-gray-600 leading-relaxed">{content.whatIs.description}</p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.keyFeatures.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.keyFeatures.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Play */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.howToPlay.title}</h2>
        <div className="space-y-6">
          {content.howToPlay.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.gameTips.title}</h2>
        <ul className="space-y-4">
          {content.gameTips.tips.map((tip, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-blue-500">•</span>
              <span className="text-gray-600">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.faq.title}</h2>
        <div className="space-y-6">
          {content.faq.questions.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{review.content}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{review.author}</span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IntroductionOtherVersionGame; 