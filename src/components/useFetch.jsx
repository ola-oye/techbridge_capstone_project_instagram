import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}, method = 'GET') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.request({
          method,
          url,
          params,
          headers: {
            'x-rapidapi-key': '8f543846fbmshc0723562c28ba8cp1520dcjsn5cef21549036', // Use environment variable for security
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
          },
        });
        if (isMounted) {
          setData(response.data.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || 'Failed to fetch data.');
        }
        console.error('API Error:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup to avoid setting state on unmounted components
    };
  }, [url, JSON.stringify(params), method]); // Use stable dependencies

  return { data, error, loading };
};

export default useFetch;