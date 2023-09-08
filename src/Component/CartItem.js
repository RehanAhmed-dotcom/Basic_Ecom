import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import StyleSheet from '../StyleSheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  removeFromCart,
  removeItem,
  updateQuantity,
} from '../redux/Action/Actions';
export default CartItem = ({item}) => {
  const dispatch = useDispatch();
  const [ids, setids] = useState([]);
  const _removeId = y => {
    let idss = [...ids];
    let res = idss.findIndex(item => item === y);
    if (res != -1) {
      idss.splice(y, 1);
      setids(idss);
    }
  };
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
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 12,
        }}>
        <View style={[StyleSheet.flatlistCart_container]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 3,
            }}>
            <View
              style={[
                StyleSheet.product_imgView,
                {width: wp(32), height: hp(15)},
              ]}
              // onPress={() => checkselect(item.id)}
            >
              <Image
                style={{
                  width: wp(32),
                  height: hp(15),
                  borderRadius: 10,
                }}
                source={{uri: item.images[0]}}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={{paddingLeft: wp(5)}}>
            <View
              style={{
                width: wp(50),
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor:'pink',
                alignItems: 'center',
              }}>
              <Text style={[StyleSheet.Home_txt3, {marginTop: wp(5)}]}>
                {item.title}
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  removeFromCart(item.id)(dispatch);
                  _removeId(item.id);
                }}>
                <AntDesign name="close" size={20} color={'#000'} style={{}} />
              </TouchableOpacity>
            </View>

            <Text style={[StyleSheet.Home_txt4, {right: 0}]}>
              {'$' + item.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: wp(20),
                justifyContent: 'space-around',
                marginTop: wp(10),
                // right:wp(2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  handleDecrement(item);
                }}
                style={StyleSheet.minus_button}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  // fontFamily: 'Montserrat-Regular ',
                }}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handleIncrement(item);
                }}
                style={StyleSheet.minus_button}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
