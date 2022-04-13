import React, { useEffect } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../../../api/recipes'
import { getRecipes } from '../../../redux/selectors'
import RecipeListItem from './RecipeListItem'

type Props = {
  navigation: any
}

const RecipesListScreen = ({navigation}: Props) => {
  const recipes = useSelector(getRecipes);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchRecipes(dispatch);
  }, []);

  const _renderItem = (({item}: any) => {
    return <RecipeListItem navigation={navigation} item={item} />
  });
  
  const _itemSeparator = (({item}: any) => {
    return <View style={styles.separator} />
  });

  return (
    <View style={styles.container}>
        <FlatList data={recipes} renderItem={_renderItem} ItemSeparatorComponent={_itemSeparator} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
  },
  separator: {
    height: 3,
    backgroundColor: "grey"
  }
});

export default RecipesListScreen