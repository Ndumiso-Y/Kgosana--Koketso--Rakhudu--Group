import { Helmet } from 'react-helmet-async';
import Carousel from '../components/Carousel';

const About = () => {
  const bannerImages = [
    '/assets/about-banner-1.jpg',
    '/assets/about-banner-2.jpg',
    '/assets/about-banner-3.jpg',
  ];

  return (
    <>
      <Helmet>
        <title>About - KKR Group</title>
        <meta
          name="description"
          content="Learn about KKR Group, a Private Special Economic Vehicle Company focused on economic development, strategic investments, and community empowerment."
        />
      </Helmet>

      {/* Hero Carousel */}
      <section className="h-96 md:h-[500px]">
        <Carousel images={bannerImages} alt="KKR Group executive meetings and planning" />
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Definition */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-royal-blue mb-6">What is a Private Special Economic Vehicle Company?</h1>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              A Private Special Economic Vehicle Company is a privately owned entity that acts as a platform for managing projects, capital, and partnerships to achieve specific economic goals. It often focuses on:
            </p>
            <ul className="list-disc list-inside text-lg text-charcoal space-y-2 ml-4">
              <li>Facilitating investments in Special Economic Zones (SEZs).</li>
              <li>Implementing Public-Private Partnerships (PPPs).</li>
              <li>Addressing local economic challenges and promoting inclusive growth.</li>
            </ul>
          </div>

          {/* Key Characteristics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-royal-blue mb-6">Key Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Private Ownership',
                  description: 'Operates independently, funded through private investments and stakeholder contributions.',
                },
                {
                  title: 'Economic Development',
                  description: 'Drives investments into key sectors like agriculture, manufacturing, and infrastructure.',
                },
                {
                  title: 'Strategic Operations',
                  description: 'Functions as a holding company for multiple projects with efficient resource allocation.',
                },
                {
                  title: 'Custom Economic Frameworks',
                  description: 'Attracts investors with reduced tariffs, streamlined regulations, and logistical support.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-neutral-gray p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gold mb-3">{item.title}</h3>
                  <p className="text-charcoal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Functions */}
          <div>
            <h2 className="text-3xl font-bold text-royal-blue mb-6">Core Functions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Infrastructure Development',
                'Business Facilitation',
                'Job Creation',
                'Stakeholder Collaboration',
                'Wealth Distribution',
              ].map((func, index) => (
                <div
                  key={index}
                  className="bg-royal-blue text-white p-4 rounded-lg text-center font-semibold hover:bg-gold hover:text-royal-blue transition-smooth"
                >
                  {func}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
