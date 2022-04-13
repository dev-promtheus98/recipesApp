import React from 'react'
import { Button, Text, View } from 'react-native'

type Props = {
  navigation: any,
  route: any
}

const RecipeDetailsScreen = ({route, navigation}: Props) => {
  const {id} = route.params;

  return (
    <View>
        <Text>RecipeDetailsScreen {id}</Text>
        <Button title='Revenir' onPress={() => {navigation.goBack()}} />
    </View>
  )
}

export default RecipeDetailsScreen