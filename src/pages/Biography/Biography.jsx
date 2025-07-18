// src/pages/Biography/Biography.jsx
import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import biographyData from '../../data/biography.json';
import awardsData from '../../data/awards.json';
import timelineData from '../../data/timeline.json';

// Import images for specific sections
import childhoodImage from '../../assets/virat_child.jpg';
import internationalDebutImage from '../../assets/virat_debut.jpg';
import captaincyImage from '../../assets/virat_captain.jpg';

const Biography = () => {
  return (
    <div className="container mx-auto p-6 pt-24 bg-gray-50 min-h-screen">
      <SectionHeader 
        title="The Unfolding Saga of Virat Kohli" 
        description="A detailed account of the life and illustrious career of a cricketing icon." 
      />

      {/* Early Life & Family */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
        <div className="md:w-1/2">
          <img src={childhoodImage} alt="Virat Kohli Childhood" className="rounded-lg shadow-md w-full h-auto object-cover max-h-96" />
        </div>
        <div className="md:w-1/2 text-kohli-dark-gray">
          <h3 className="text-3xl font-semibold mb-4 text-kohli-blue">Early Life & Junior Cricket</h3>
          <p className="mb-4 text-lg leading-relaxed">{biographyData.earlyLife}</p>
          <p className="text-lg leading-relaxed">{biographyData.juniorCricket}</p>
        </div>
      </section>

      {/* International Debut & Rise to Stardom */}
      <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-200">
        <div className="md:w-1/2">
          <img src={internationalDebutImage} alt="Virat Kohli Debut" className="rounded-lg shadow-md w-full h-auto object-cover max-h-96" />
        </div>
        <div className="md:w-1/2 text-kohli-dark-gray">
          <h3 className="text-3xl font-semibold mb-4 text-kohli-blue">International Debut & Rise to Stardom</h3>
          <p className="text-lg leading-relaxed">{biographyData.internationalDebut}</p>
        </div>
      </section>

      {/* Captaincy Era & Post-Captaincy */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-400">
        <div className="md:w-1/2">
          <img src={captaincyImage} alt="Virat Kohli Captaincy" className="rounded-lg shadow-md w-full h-auto object-cover max-h-96" />
        </div>
        <div className="md:w-1/2 text-kohli-dark-gray">
          <h3 className="text-3xl font-semibold mb-4 text-kohli-blue">The Captaincy Era & Beyond</h3>
          <p className="mb-4 text-lg leading-relaxed">{biographyData.captaincyEra}</p>
          <p className="text-lg leading-relaxed">{biographyData.postCaptaincy}</p>
        </div>
      </section>

      {/* Personal Life & Playing Style */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-600">
        <h3 className="text-3xl font-semibold mb-4 text-kohli-blue text-center">Personal Life & Playing Style</h3>
        <p className="mb-4 text-lg leading-relaxed text-kohli-dark-gray">{biographyData.personalLife}</p>
        <p className="text-lg leading-relaxed text-kohli-dark-gray">{biographyData.playingStyle}</p>
      </section>

      {/* Awards & Honours */}
      <section id="awards" className="mb-16 bg-kohli-blue text-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-kohli-gold mb-8">Awards & Honours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((item, index) => (
            <div key={index} className="bg-blue-800 p-5 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
              <p className="text-lg font-bold text-kohli-gold">{item.year}</p>
              <p className="text-xl">{item.award}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg animate-fade-in delay-200">
        <h2 className="text-4xl font-bold text-center text-kohli-blue mb-8">Career Timeline</h2>
        <div className="relative border-l-2 border-kohli-blue pl-8 ml-4">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 flex items-start">
              <div className="absolute w-4 h-4 bg-kohli-gold rounded-full -left-2 top-0 mt-1 animate-ping-once"></div>
              <div className="flex-grow pl-4">
                <h4 className="text-2xl font-semibold text-kohli-blue mb-1">{item.year}</h4>
                <p className="text-lg text-kohli-dark-gray">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Biography;