import axios from "axios";
import { fetchRecipesAction } from "../../redux/actions";

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "a499f1f95b43427eb0eec11a3d6756c9";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch: any, query?: any)=>{
    try {
        console.log('====================================');
        console.log("Dans fetchRecipes", );
        console.log('====================================');
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number: MAX_PER_PAGE
            },
            headers: {
                apiKey,
            }
        });

        console.log("la reponse", response.data.results);
        dispatch(fetchRecipesAction(response.data.results));

    } catch (error) {
        console.log('====================================');
        console.log("error request recipes", error);
        console.log('====================================');
    }
    
}
