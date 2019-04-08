
const initialState = {
  prices: null,
  error: null,
}

export default function (state = initialState, action: any) {
  switch(action.type){
    case 'FETCH_PRICES': 
      return {
        ...state,
        prices: [],
        fetchingPrices: true,
        error: null
      };
    case 'FETCH_PRICES_SUCCESS': 
      return {
        ...state,
        fetchingPrices: false,
        prices: action.prices,
        error: null
      };
    case 'FETCH_PRICES_ERROR': 
      return {
        ...state,
        fetchingPrices: false,
        prices: null,
        error: action.error
      };
    default:
      return state;
  }
}