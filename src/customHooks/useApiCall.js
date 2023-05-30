import {useEffect, useState} from 'react';
const useFetch = url => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  //This can be used If we need api call in page load
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        seterror(data.error);
        setdata(data.joke);
        setloading(false);
      });
  }, [url]);

  //Call API in Any button click
  const callRemoteApi = () => {
    setloading(true);
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          seterror(data.error);
          setdata(data.joke);
          setloading(false);
        });
    }, 5000);
  };
  return {data, loading, error, callRemoteApi};
};

export default useFetch;
