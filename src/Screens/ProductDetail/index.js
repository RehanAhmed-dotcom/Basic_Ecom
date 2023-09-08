import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../Component/Header';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyleSheet from '../../StyleSheet';

import {SwiperFlatList} from 'react-native-swiper-flatlist';
export default function ProductDetail({navigation, route}) {
  const {specificItem} = route.params;

  return (
    <View style={{flex: 1}}>
      <Header
        name={specificItem.title}
        rightIcon={<AntDesign name="shoppingcart" size={25} color={'white'} />}
        rightIconOnPress={() => navigation.navigate('Cart')}
        leftIcon={
          <AntDesign
            name="arrowleft"
            size={25}
            color={'white'}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <View>
        <SwiperFlatList
          showPagination
          paginationActiveColor="red"
          paginationStyleItem={{marginHorizontal: wp(1), marginTop: wp(0)}}
          paginationStyleItemActive={{
            width: wp(3),
            height: wp(2),
            marginTop: 5,
          }}
          paginationStyleItemInactive={{
            width: wp(2),
            height: wp(2),
            marginTop: 5,
          }}
          data={specificItem.images}
          renderItem={({item}) => (
            <View style={{alignSelf: 'center'}}>
              <Image
                style={StyleSheet.detail_img}
                source={{uri: item}}
                resizeMode="contain"
              />
            </View>
          )}
        />
        <View style={StyleSheet.PriceName_View}>
          <Text style={StyleSheet.Detail_txt1}>{specificItem.title}</Text>
          <Text style={[StyleSheet.Detail_txt1, {color: '#8B98B4'}]}>
            {'$' + specificItem.price}
          </Text>
        </View>
      </View>

      <View style={{marginTop: wp(15)}}>
        <Text style={StyleSheet.Detail_txt2}>Description</Text>

        <View style={StyleSheet.line}></View>
        <ScrollView style={{height: hp(50)}}>
          <Text style={StyleSheet.Detail_txt3}>{specificItem.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
