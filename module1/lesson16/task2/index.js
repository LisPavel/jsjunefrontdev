const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const allResponses = await Promise.all(requests);

    const failedRequest = allResponses.find((response) => !response.ok);
    if (failedRequest) {
      console.log(failedRequest);
      throw new Error(`Failed to do this request ${failedRequest.url}`);
    }

    const allData = await Promise.all(allResponses.map((data) => data.json()));

    console.log(allData);
  } catch (error) {
    console.log(error);
  }
};
getTodosByIds([43, 21, 55, 100, 10]);
