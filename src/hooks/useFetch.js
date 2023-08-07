import React from 'react'

const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) setData(data);
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url])

  return { data, error, loading }
}

export default useFetch