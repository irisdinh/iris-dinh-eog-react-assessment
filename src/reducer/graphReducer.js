const initialState = {
  searchItem: [],
  graphData: [],
  loading: false,
  error: true,
};

const updateSearchItem = (state, action) => ({
  ...state,
  searchItem: action.searchItem,
});

const updateGraphData = (state, action) => ({
  ...state,
  graphData: action.graphData,
});

const updateLoading = (state, action) => ({
  ...state,
  loading: action.loading,
});

const updateError = (state, action) => ({
  ...state,
  lerror: action.error,
});

export const GraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_ITEM':
      return updateSearchItem(state, action);
    case 'UPDATE_GRAPH':
      return updateGraphData(state, action);
    case 'UPDATE_ERROR':
      return updateError(state, action);
    case 'UPDATELOADING':
      return updateLoading(state, action);
    default:
      return state;
  }
};
