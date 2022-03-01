import React from 'react'
import { Button, Text, View } from 'react-native'

type Props = {
  navigation: any
}

const RecipeDetailsScreen = ({navigation}: Props) => {
  return (
    <View>
        <Text>RecipeDetailsScreen</Text>
        <Button title='Revenir' onPress={() => {navigation.goBack()}} />
    </View>
  )
}

export default RecipeDetailsScreen