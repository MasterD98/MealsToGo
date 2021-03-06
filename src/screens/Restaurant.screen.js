import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Platform ,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/Resturant-info';
export const RestaurantScreen =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar/>
            </View>
            <View style={styles.list}>
                <RestaurantInfo/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  search:{
      padding:16,
  },
  list:{
      flex:1,
      padding:16,
      backgroundColor:"blue",
  }

});