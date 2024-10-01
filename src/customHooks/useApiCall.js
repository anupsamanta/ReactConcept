import {useEffect, useState} from 'react';
const useFetch = url => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');

  //This can be used If we need  in page load
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
    console.log('url ===> ' + JSON.stringify(url));
    setloading(true);
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          //console.log('API response ====> ' + JSON.stringify(data))
          seterror(data.error);
          // setdata(data.joke);
          setdata(data);
          setloading(false);
        });
    }, 5000);
  };
   //Call API in Any button click
   const callRemoteApi2 = (newUrl) => {
    console.log('newUrl' + JSON.stringify(newUrl));
    let apiUrl = newUrl.url;
    setloading(true);
    setTimeout(() => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          //console.log('API response ====>2222======> ' + JSON.stringify(data))
          seterror(data.error);
          setdata(data);
          setloading(false);
        });
    }, 5000);
  };
  return {data, loading, error, callRemoteApi, callRemoteApi2};
};



export default useFetch;
