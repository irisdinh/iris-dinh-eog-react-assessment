const initialState = {
  searchItem: [],
  graphData: [],
};

const updateGraphData = (state, action) => ({
  ...state,
  graphData: action.graphData,
});

const updateSearchItem = (state, action) => ({
  ...state,
  searchItem: action.searchItem,
});

export const GraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GRAPH_DATA':
      return updateGraphData(state, action);
    case 'UPDATE_SEARCH_ITEM':
      return updateSearchItem(state, action);
    default:
      return state;
  }
};
