const countModalInitState = {
  activate: false,
  adultCount: 1,
  childCount: 0,
  babyCount: 0,
};

const countModalReducer = (state, action) => {
  switch (action.type) {
    case 'changeModalActive':
      return {
        ...state,
        activate: !state.activate,
      };
    case 'adultCountUp':
      return {
        ...state,
        adultCount: state.adultCount + 1,
      };
    case 'adultCountDown':
      return {
        ...state,
        adultCount: state.adultCount - 1,
      };
    case 'childCountDown':
      return {
        ...state,
        childCount: state.childCount - 1,
      };
    case 'childCountUp':
      return {
        ...state,
        childCount: state.childCount + 1,
      };
    case 'babyCountDown':
      return {
        ...state,
        babyCount: state.babyCount - 1,
      };
    case 'babyCountUp':
      return {
        ...state,
        babyCount: state.babyCount + 1,
      };
    case 'reset':
      return {
        ...state,
        adultCount: 1,
        childCount: 0,
        babyCount: 0,
      };
    default:
      throw new Error();
  }
};

export {
  countModalInitState,
  countModalReducer,
};
