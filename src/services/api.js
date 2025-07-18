import axios from 'axios';

// --- Hypothetical Cricket Stats API ---
// In a real scenario, replace this with a base URL for a cricket API
// (e.g., 'https://api.sportradar.com/cricket/v2/en/').
// You would also need to include your API key.
const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1/countries?apikey=c0be10f4-561a-4b2e-bb52-b99c2dcd4eb6&offset='; // Placeholder
const CRICKET_API_KEY = ' c0be10f4-561a-4b2e-bb52-b99c2dcd4eb6'; // Replace with your actual key

// --- News API ---
// NewsAPI.org is a common choice for news. You'll need to register for a free API key.
// Note: NewsAPI.org has usage limits on its free tier and does not allow
// commercial use without a paid plan.
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
const NEWS_API_KEY = '052e295dfef949559e3779d53472bcab'; // Replace with your actual NewsAPI.org key

export const fetchViratKohliStats = async () => {
  try {
    // This is a placeholder. A real API call might look like:
    // const response = await axios.get(`${CRICKET_API_BASE_URL}/players/virat-kohli/stats`, {
    //   params: { api_key: CRICKET_API_KEY }
    // });
    // For demonstration, we'll return mock data directly.
    console.log("Fetching Virat Kohli stats from hypothetical API...");
    const mockStats = {
      test: { matches: 123, runs: 9230, centuries: 30, average: 46.85, wickets: 0 },
      odi: { matches: 302, runs: 14181, centuries: 51, average: 57.88, wickets: 5 },
      t20i: { matches: 125, runs: 4188, centuries: 1, average: 48.69, wickets: 4 },
      ipl: { matches: 237, runs: 7977, centuries: 8, average: 38.69, wickets: 0 }
    };
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockStats;
  } catch (error) {
    console.error("Error fetching Virat Kohli stats:", error);
    throw error;
  }
};

export const fetchViratKohliNews = async () => {
  try {
    // This example uses NewsAPI.org's 'everything' endpoint
    // You might need to adjust the query parameters based on the specific API you use.
    const response = await axios.get(`${NEWS_API_BASE_URL}/everything`, {
      params: {
        q: 'Virat Kohli cricket', // Query for Virat Kohli news
        language: 'en',
        sortBy: 'publishedAt',
        apiKey: NEWS_API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching Virat Kohli news:", error);
    throw error;
  }
};

// You can add more functions here for other API calls (e.g., match schedules, photos)