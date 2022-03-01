import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipeDetailsScreen from './src/components/RecipesEpic/RecipeDetailsScreen';
import RecipesListScreen from './src/components/RecipesEpic/RecipesListScreen';
import store from './src/redux/store';

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='RecipesList' component={RecipesListScreen} />
                    <Stack.Screen name='RecipeDetails' component={RecipeDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default App;
