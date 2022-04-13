import { ADD_RECIPES } from "../actionsType";

const initialState: any[] = [];

type actionType = {
  type: string;
  payload: any;
};

const recipesList = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_RECIPES:
        return action.payload

    default:
      return state;
  }
};

export default recipesList;
