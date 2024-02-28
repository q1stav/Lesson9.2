export const addNewToDo = (addToDo) => {
    return (dispatch) => {
      return fetch("http://localhost:3005/posts", {
        method: "POST",
        header: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          title: addToDo,
        }),
      })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
          dispatch(
            {
              type: "ADD_NEW_TODO",
              payload: response,
            }
          );
        });
    };
  };