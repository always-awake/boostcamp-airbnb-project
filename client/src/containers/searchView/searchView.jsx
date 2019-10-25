import React, { useReducer } from 'react';
import Header from './header/header.jsx';
import FilteringBar from './filteringBar/filteringBar.jsx';
import RoomList from './roomList/roomList.jsx';
import useGet from '../../utils/hooks/useGet.js';
import FETCH_ROOM_LIST_URL from '../../utils/urls.js';
import CountModal from '../../components/modal/countModal.jsx';
import PriceModal from '../../components/modal/priceModal.jsx';
import { countModalInitState, countModalReducer } from '../../utils/reducer/countModal.js';
import { urlQuertInitState, urlQueryReducer } from '../../utils/reducer/urlQuery.js';
import { priceModalInitState, priceModalReducer } from '../../utils/reducer/priceModal.js';

const SearchPage = () => {
  const [urlQuery, setUrlQueryDispatch] = useReducer(
    urlQueryReducer,
    urlQuertInitState,
  );
  const [countModal, countModalDispatch] = useReducer(
    countModalReducer,
    countModalInitState,
  );
  const [priceModal, priceModalDispatch] = useReducer(
    priceModalReducer,
    priceModalInitState,
  );
  const [data] = useGet(FETCH_ROOM_LIST_URL, urlQuery);
  return (
    <div>
      <Header />
      <FilteringBar
        countModalDispatch={countModalDispatch}
        priceModalDispatch={priceModalDispatch}
      />
      {countModal.activate && (
        <CountModal
          countModal={countModal}
          countModalDispatch={countModalDispatch}
          setUrlQueryDispatch={setUrlQueryDispatch}
        />
      )}
      {priceModal.activate && (
        <PriceModal
          priceModal={priceModal}
          priceModalDispatch={priceModalDispatch}
          setUrlQueryDispatch={setUrlQueryDispatch}
        />
      )}
      <RoomList rooms={data && data.rooms} />
    </div>
  );
};

export default SearchPage;
