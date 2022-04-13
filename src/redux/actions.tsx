import { ADD_RECIPES } from "./actionsType";

// action = {type: NOM_ACTION, payload: data}
export const fetchRecipesAction = (data: any) => ({
    type: ADD_RECIPES,
    payload: data
});