import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import RecipeDetailsScreen from './src/components/RecipesEpic/RecipeDetailsScreen';
import RecipesListScreen from './src/components/RecipesEpic/RecipesListScreen';
import store from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                {/* <View>
                    <Text>RECIPES APP</Text>
                </View> */}
                <RecipesListScreen />
                <RecipeDetailsScreen />
            </SafeAreaView>
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
