const initialState: any[] = [];

type actionType = {
  type: string;
  payload: any;
};

const recipesList = (state = initialState, action: actionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesList;
