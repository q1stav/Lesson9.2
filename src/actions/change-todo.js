export const changeToDo = (id, updateToDoValue) => {
  return (dispatch) => {
    return fetch(`http://localhost:3005/posts/${id}`, {
      method: "PUT",
      header: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: updateToDoValue,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        dispatch({
          type: "CHANGE_TODO",
          payload: response,
        });
      });
  };
};
