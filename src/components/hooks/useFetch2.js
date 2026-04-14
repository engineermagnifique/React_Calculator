import { useEffect, useState, useCallback } from "react";

const useFetch2 = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const FetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(url);
      const results = await res.json();

      setData(results);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return { data, loading, error, refetch: FetchData };
};

export default useFetch2;