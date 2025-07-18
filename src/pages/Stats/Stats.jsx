// src/pages/Stats/Stats.jsx
import React, { useState, useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import StatCard from '../../components/StatCard/StatCard';
import { fetchViratKohliStats } from '../../services/api';

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const data = await fetchViratKohliStats();
        setStats(data);
        setError(null);
      } catch (err) {
        setError("Failed to load statistics. Please try again later.");
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-kohli-light-gray pt-24">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-kohli-blue"></div>
        <p className="ml-4 text-xl text-kohli-dark-gray">Loading Virat Kohli's legendary stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-100 text-kohli-red text-xl p-4 text-center pt-24">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pt-24 bg-gray-50 min-h-screen">
      <SectionHeader 
        title="Virat Kohli: Unparalleled Career Statistics" 
        description="A deep dive into the numbers that define a cricketing phenomenon across all formats." 
      />

      {stats && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-kohli-blue mb-8 text-center animate-fade-in">Overall Batting & Bowling Records</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(stats).map(([format, data]) => (
              <StatCard 
                key={format}
                title={format.toUpperCase()}
                value={`${data.runs} Runs`}
                description={`Matches: ${data.matches}, Centuries: ${data.centuries}, Avg: ${data.average.toFixed(2)}${data.wickets !== undefined && data.wickets > 0 ? `, Wickets: ${data.wickets}` : ''}, HS: ${data.highestScore}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Add more detailed stats sections here if you have richer data */}
      {/* Example: A section for specific records or year-wise performance (if available from API) */}
      <section className="mt-16 bg-white p-8 rounded-lg shadow-lg text-kohli-dark-gray animate-fade-in delay-200">
        <h2 className="text-3xl font-semibold text-kohli-blue mb-6 text-center">Key Batting Milestones</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Fastest to 8,000, 9,000, 10,000, 11,000, 12,000, and 13,000 ODI runs.</li>
          <li>Most centuries in ODIs (51, surpassing Sachin Tendulkar).</li>
          <li>Most runs in T20 Internationals.</li>
          <li>Most Player of the Series awards in T20Is.</li>
          <li>First captain to win a Test series in Australia.</li>
          <li>Only batsman to average over 50 in all three international formats simultaneously.</li>
          {/* Add more significant records */}
        </ul>
      </section>

      <section className="text-center text-gray-600 mt-12">
        <p className="text-lg">
          Note: Statistics are based on available data and are for informational purposes.
        </p>
      </section>
    </div>
  );
};

export default Stats;