import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

type Props = {
  navigation: any
}

const RecipesListScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text>RecipesListScreen</Text>
        <Button title='Aller sur la page détail' onPress={() => {navigation.navigate('RecipeDetails')}} />
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
});

export default RecipesListScreen