import React from 'react';
import StyleSheet from '../StyleSheet';
import {Text, TouchableOpacity, View} from 'react-native';
const Header = ({name, leftIcon, rightIcon, rightIconOnPress}) => {
  return (
    <View style={StyleSheet.mainHeader}>
      {/* <View /> */}
      <View style={StyleSheet.headerContainer}>{leftIcon && leftIcon}</View>
      <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
        {name}
      </Text>
      <TouchableOpacity
        onPress={rightIconOnPress}
        style={StyleSheet.headerContainer}>
        {rightIcon && rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
