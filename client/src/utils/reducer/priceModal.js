const priceModalInitState = {
  activate: false,
  minPrice: 0,
  maxPrice: 80,
};

const priceModalReducer = (state, action) => {
  switch (action.type) {
    case 'changeModalActive':
      return {
        ...state,
        activate: !state.activate,
      };
    case 'setPrice':
      return {
        ...state,
        minPrice: action.minPrice,
        maxPrice: action.maxPrice,
      };
    case 'reset':
      return {
        ...state,
        minPrice: 0,
        maxPrice: 80,
      };
    default:
      throw new Error();
  }
};

export {
  priceModalInitState,
  priceModalReducer,
};
