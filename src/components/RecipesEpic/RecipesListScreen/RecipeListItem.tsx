import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const URL_IMAGE = "https://spoonacular.com/recipeImages/";
const URL_SIZE = "-90x90.jpg";


type Props = {
  item: any,
  navigation: any
}

const RecipeListItem = ({item, navigation}: Props) => {
  return (
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('RecipeDetails', {
          id: item.id
        });
      }}
    >
      <View style={styles.container}>
        <Image source={{uri: URL_IMAGE+item.id+URL_SIZE}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    marginLeft: 25,
    marginTop: 10,
  },
});

export default RecipeListItem