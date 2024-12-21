import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || "An unknown error occurred");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getRequest = useCallback(async (url) => {
    return fetchData(url, { method: "GET" });
  }, [fetchData]);

  return { data, loading, error, getRequest };
};

export default useFetch;