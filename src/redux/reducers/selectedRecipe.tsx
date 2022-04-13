import { SELECTED_RECIPE } from "../actionsType";

const initialState: any[] = [];

type actionType = {
  type: string;
  payload: any;
};

const selectedRecipe = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SELECTED_RECIPE:
        return action.payload.data;

    default:
      return state;
  }
};

export default selectedRecipe;
