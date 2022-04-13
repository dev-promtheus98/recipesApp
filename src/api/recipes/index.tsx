import axios from "axios";
import { fetchRecipesAction, fetchSelectedRecipeAction } from "../../redux/actions";

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes/";
const ENDPOINT_RECIPES = ENDPOINT_BASE + "complexSearch";
const apiKey = "a499f1f95b43427eb0eec11a3d6756c9";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch: any, query?: any)=>{
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number: MAX_PER_PAGE
            }
        });

        dispatch(fetchRecipesAction(response.data.results));

    } catch (e) {
        console.log("error request recipes", e);
    }
    
}

export const fetchSelectedRecipe = async (dispatch: any, recipeId: number)=>{
    try {
        console.log('====================================');
        console.log("fetch selected recipe");
        console.log('====================================');
        const response = await axios.get(ENDPOINT_BASE+ `${recipeId}/information`, {
            params: {
                apiKey
            },
        });

        console.log('====================================');
        console.log("results fetch selected recipe", response.data);
        console.log('====================================');

        dispatch(fetchSelectedRecipeAction(response.data));

    } catch (e) {
        console.log("error request select recipe", e);
    }
    
}
