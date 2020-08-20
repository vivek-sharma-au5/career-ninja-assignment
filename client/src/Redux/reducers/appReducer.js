let initialState = {
  all_battles: [],
  name_list: [],
  search_results: [],
};

function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log(action);
  switch (action.type) {
    case "ALL_DATA":
      stateCopy.all_battles = action.payload;
      return stateCopy;

    case "LIST":
      stateCopy.name_list = action.payload;

      return stateCopy;

    case "SEARCH_DATA":
      return stateCopy;

    case "QUERY_RESULTS":
      stateCopy.search_results = action.payload;
      console.log("search", action.payload);
      return stateCopy;
    case "ERROR":
      stateCopy.error = true;
      return stateCopy;

    default:
      return stateCopy;
  }
}

export default appReducerFunction;
