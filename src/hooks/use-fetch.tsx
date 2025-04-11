import { useState, useEffect } from 'react';

export const useFetch = <T = unknown>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);

        const { data } = await res.json();

        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading };
};
