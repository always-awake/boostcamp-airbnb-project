import { useState, useEffect } from 'react';

/**
 * 매개변수로 받은 url 주소로 fetch 요청 후, 응답 받은 데이터를 리턴하는 커스텀 Hook
 * @param { String } url
 * @returns { Array } data array
 */
const useGet = (url) => {
  const [data, setData] = useState({});
  const fetchUrl = async () => {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });
    const json = await response.json();
    setData(json.data);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data];
};

export default useGet;
