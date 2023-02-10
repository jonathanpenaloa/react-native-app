import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

// FlatList is similar to map - renders only when they are about to show on screen for better memory usage -  
// SafeArea - used to rander content within safe areas boundaries within a device 
// View  - like a div in React.js

import { COLORS, NFTData } from '../constants';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1}} >
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }} >
        <View style={{ zIndex: 0}} >
          <FlatList 
            data={NFTData} 
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />  
        </View>
        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
          }} >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home