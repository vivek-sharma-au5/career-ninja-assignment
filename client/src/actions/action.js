export function getAllData(data) {
  console.log(data);
  return {
    type: "ALL_DATA",
    payload: data,
  };
}

export function sendList(data) {
  console.log(data);
  return {
    type: "LIST",
    payload: data,
  };
}

export function sendQueryResults(data) {
  console.log(data);
  return {
    type: "QUERY_RESULTS",
    payload: data,
  };
}
