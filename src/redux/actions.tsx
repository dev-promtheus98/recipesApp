import { ADD_RECIPES, SELECTED_RECIPE } from "./actionsType";

// action = {type: NOM_ACTION, payload: data}
export const fetchRecipesAction = (data: any) => ({
    type: ADD_RECIPES,
    payload: {
        data
    }
});

export const fetchSelectedRecipeAction = (data: any) => ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
});