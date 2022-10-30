import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(responseData => setData(responseData))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching };
}
