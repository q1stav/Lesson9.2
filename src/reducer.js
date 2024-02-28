let initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TODOS": {
      return (state = [...action.payload]);
    }

    case "ADD_NEW_TODO": {
      return (state = [
        ...state,
        { id: action.payload.id, title: action.payload.title },
      ]);
    }
    case "DELETE_TODO": {
      state = state.filter((state) => state.id !== action.payload.id);
      return [...state];
    }
    case "CHANGE_TODO": {
      state.forEach((element, index) => {
        if (element.id === action.payload.id) {
          state[index].title = action.payload.title;
        }
      });
      return [...state];
    }

    default: {
      return state;
    }
  }
};
