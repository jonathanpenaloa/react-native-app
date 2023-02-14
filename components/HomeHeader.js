import { View, Text, Image, TextInput} from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../constants'

import React from 'react'

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Image source={assets.logo}
        resizeMethod="contain"
        style={{ width: 90, height: 25 }}/>
        <View style={{ width: 45, height: 45 }} >
          <Image
          source={assets.person01}
          resizeMethod="contain"
          style={{ width: "100%", height: "100%" }}
          />
          <Image
          source={assets.badge}
          resizeMethod="contain"
          style={{ position: "absolute",  width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader