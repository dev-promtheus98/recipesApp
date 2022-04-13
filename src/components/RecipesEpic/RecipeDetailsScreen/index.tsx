import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedRecipe } from '../../../api/recipes'
import { getSelectedRecipe } from '../../../redux/selectors'

const URL_IMAGE = "https://spoonacular.com/recipeImages/";
const URL_SIZE = "-90x90.jpg";

type Props = {
  navigation: any,
  route: any
}

const RecipeDetailsScreen = ({route, navigation}: Props) => {
  const {id} = route.params;

  const recipe = useSelector(getSelectedRecipe);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchSelectedRecipe(dispatch, id);
  }, []);

  return (
    <ScrollView>
      <View>
        <Image source={{uri: recipe.image}} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.containerIngredients}>
        {recipe.extendedIngredients.map((ing: any) => {
          return <Text key={ing.id} style={styles.ing}>{ing.name}</Text>
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  containerImage:{
    height: 200
  },
  image: {
    height: 200
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
  containerIngredients:{
    borderTopWidth: 1,
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 15
  },
  ing: {
    fontSize: 16,
    color: "#000", 
  },
});

export default RecipeDetailsScreen