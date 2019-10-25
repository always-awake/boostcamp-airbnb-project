const urlQuertInitState = {
  checkIn: null,
  checkOut: null,
  maxPrice: null,
  minPrice: null,
  bedCount: null,
  bedroomCount: null,
  bathroomCount: null,
  headCount: null,
};

const urlQueryReducer = (state, action) => {
  switch (action.type) {
    case 'setHeadCountOption':
      return {
        ...state,
        headCount: action.headCount,
      };
    default:
      throw new Error();
  }
};

export {
  urlQuertInitState,
  urlQueryReducer,
};
