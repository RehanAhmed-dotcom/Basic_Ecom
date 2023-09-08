import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {removeFromCart} from '../../redux/Action/Actions';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {removeItem, updateQuantity} from '../../redux/Action/Actions';
import {useDispatch, useSelector} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import CartItem from '../../Component/CartItem';
import StyleSheet from '../../StyleSheet';
import Header from '../../Component/Header';
const Cart = ({navigation, route}) => {
  const dispatch = useDispatch();
  const CartData = useSelector(state => state.cartReducer);

  const {user} = useSelector(({myuserReducer}) => myuserReducer);
  const handleDecrement = item => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity(item.id, item.quantity - 1));
    }
  };

  const handleIncrement = item => {
    dispatch(updateQuantity(item.id, item.quantity + 1));
  };
  // console.log("")
  const getTotalPrice = () => {
    let total = 0;
    CartData?.items.map(item => {
      total = total + item.quantity * item.price;
    });
    return total;
  };
  const [ids, setids] = useState([]);
  const _removeId = y => {
    let idss = [...ids];
    let res = idss.findIndex(item => item === y);
    if (res != -1) {
      idss.splice(y, 1);
      setids(idss);
    }
  };
  const renderItem = ({item}) => <CartItem item={item} />;
  return (
    <View style={{flex: 1, backgroundColor: '#556B2F'}}>
      <Header
        name={'Cart'}
        leftIcon={
          <AntDesign
            name="arrowleft"
            size={25}
            color={'white'}
            onPress={() => navigation.goBack()}
          />
        }
      />

      <View style={StyleSheet.mainView}>
        <View style={{height: hp(80)}}>
          <FlatList data={CartData?.items} renderItem={renderItem} />
        </View>
        <View
          style={{
            width: '100%',
            height: hp(9),
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            bottom: wp(4),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            // alignSelf: 'center',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}>
          <View
            style={{
              width: '50%',
              // flexDirection:'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                // fontFamily: 'Montserrat-Regular',
                color: '#8B98B4',
                // alignItems:'flex-start',
              }}>
              TOTAL AMOUNT
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                // alignItems:'flex-start',
              }}>
              {'$' + getTotalPrice().toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
