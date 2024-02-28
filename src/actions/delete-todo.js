export const deleteToDo = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3005/posts/${id}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        dispatch({
          type: "DELETE_TODO",
          payload: response,
        });
      });
  };
};
