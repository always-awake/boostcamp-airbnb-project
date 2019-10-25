import { useState, useEffect } from 'react';
import { refineurl } from '../refine.js';

/**
 * 매개변수로 받은 url, urlQuery를 조합한 refindeUrl로 fetch 요청
 * refinedUrl 주소로 fetch 요청 후, 응답 받은 데이터를 리턴하는 커스텀 Hook
 * @param { String } url
 * @returns { Array } data array
 */
const useGet = (url, urlQuery) => {
  const refinedUrl = refineurl(url, urlQuery);
  const [data, setData] = useState({});
  const fetchUrl = async () => {
    const response = await fetch(refinedUrl, {
      method: 'GET',
      credentials: 'include',
    });
    const json = await response.json();
    setData(json.data);
  };

  useEffect(() => {
    fetchUrl();
  }, [urlQuery]);

  return [data];
};

export default useGet;
