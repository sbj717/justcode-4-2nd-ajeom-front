import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res));
  }, [url]);

  return data;
}
