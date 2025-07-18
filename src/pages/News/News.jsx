// src/pages/News/News.jsx
import React, { useState, useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { fetchViratKohliNews } from '../../services/api';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const articles = await fetchViratKohliNews();
        // Basic filtering for relevance and required fields
        const filteredArticles = articles.filter(article => 
          article.title && 
          article.description && 
          article.urlToImage && 
          article.url &&
          (article.title.toLowerCase().includes('virat kohli') || 
           article.description.toLowerCase().includes('virat kohli'))
        ).slice(0, 20); // Limit to top 20 relevant articles

        setNews(filteredArticles);
        setError(null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(`Failed to load news. ${err.response?.data?.message || err.message}. Please ensure your NewsAPI key is valid and not exceeding limits.`);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-kohli-light-gray pt-24">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="ml-4 text-xl text-kohli-dark-gray">Fetching the latest news...</p>
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
        title="Latest Buzz: Virat Kohli News" 
        description="Stay updated with the recent happenings and headlines featuring the cricket maestro." 
      />

      {news.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No recent news found for Virat Kohli. Please check your API key or try again later.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Available'; }} // Fallback image
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {article.title}
                  </a>
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {article.description.substring(0, 150)}... {/* Truncate description */}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  {article.source && article.source.name && <span className="font-medium">Source: {article.source.name}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;