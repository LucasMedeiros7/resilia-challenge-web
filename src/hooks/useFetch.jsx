import { useEffect, useState } from 'react';

export function useFetch(path) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const baseUrl = 'http://localhost:3333/';

  useEffect(() => {
    fetch(baseUrl + path)
      .then(response => response.json())
      .then(responseData => setData(responseData))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching };
}
