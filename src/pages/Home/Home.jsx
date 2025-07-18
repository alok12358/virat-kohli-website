// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import biographyData from '../../data/biography.json';
import awardsData from '../../data/awards.json';

// Ensure your images are in the public/assets folder
import viratHeroImage from '../../assets/virat_hero.jpg'; 
import viratAwardImage from '../../assets/virat_award.jpg'; // Example image for biography summary

const Home = () => {
  // Get latest 3 awards for display
  const latestAwards = awardsData.slice(0, 3); 

  return (
    <div className="home-page">
      <HeroSection
        image={viratHeroImage}
        title="Virat Kohli"
        subtitle="The King. The Legend. The Inspiration."
        quote="Self-belief and hard work will always earn you success."
      />

      {/* Introduction Section */}
      <section className="container mx-auto py-16 px-4">
        <SectionHeader 
          title="A Glimpse into Greatness" 
          description="Explore the journey of one of cricket's most iconic figures, a testament to dedication and passion." 
        />
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-xl animate-fade-in-up">
          <div className="md:w-1/2">
            <img 
              src={viratAwardImage} 
              alt="Virat Kohli with award" 
              className="rounded-lg shadow-md w-full h-auto object-cover max-h-96"
            />
          </div>
          <div className="md:w-1/2 text-kohli-dark-gray">
            <h3 className="text-3xl font-semibold mb-4 text-kohli-blue">The Legend Continues...</h3>
            <p className="mb-4 text-lg leading-relaxed">
              {biographyData.captaincyEra.substring(0, 300)}... {/* Short snippet */}
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              {biographyData.playingStyle.substring(0, 250)}...
            </p>
            <Link 
              to="/biography" 
              className="inline-block bg-kohli-red text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Read Full Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Awards Section */}
      <section className="bg-kohli-blue py-16 px-4 text-white">
        <SectionHeader 
          title="Recent Recognitions" 
          description="A selection of the latest accolades and honors bestowed upon Virat Kohli." 
        />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {latestAwards.map((award, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-xl text-kohli-dark-gray animate-fade-in delay-200"
            >
              <p className="text-xl font-bold mb-2 text-kohli-gold">{award.year}</p>
              <p className="text-lg">{award.award}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/biography#awards" 
            className="inline-block bg-kohli-gold text-kohli-blue font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            View All Awards
          </Link>
        </div>
      </section>

      {/* Call to Action for Stats */}
      <section className="container mx-auto py-16 px-4 text-center">
        <SectionHeader 
          title="Dive into the Numbers" 
          description="Explore Virat Kohli's unparalleled cricketing statistics across all formats." 
        />
        <p className="text-xl text-kohli-dark-gray mb-8">
          From centuries to averages, every record tells a story of dominance.
        </p>
        <Link 
          to="/stats" 
          className="inline-block bg-kohli-blue text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          See Full Stats
        </Link>
      </section>
    </div>
  );
};

export default Home;