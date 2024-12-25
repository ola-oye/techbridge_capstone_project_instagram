import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}, method = 'GET') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method,
          url,
          params,
          headers: {
            'x-rapidapi-key': '96f915450dmsh13c4e4b72f9969ap12d760jsn0eb794c23647', // Use environment variable
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params, method]);

  return { data, error, loading };
};

export default useFetch;
