import {View, TouchableOpacity, Text, Image} from 'react-native';
import {addItem} from '../redux/Action/Actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyleSheet from '../StyleSheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
export default ProductItem = ({item, navigation}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {specificItem: item})}
      activeOpacity={0.9}
      style={{flex: 1}}>
      <View style={StyleSheet.flatlist_container}>
        <View style={StyleSheet.product_imgView}>
          <Image
            style={StyleSheet.Cart_Image}
            source={{uri: item.images[0]}}
            resizeMode="contain"
          />
        </View>
        <View style={{paddingLeft: wp(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={StyleSheet.Home_txt3}>
              {item.title.length > 15
                ? item.title.substring(0, 13) + '...'
                : item.title}
            </Text>
            <Text style={StyleSheet.Home_txt4}>{'$' + item.price}</Text>
          </View>
          <Text style={StyleSheet.Home_txt5}>
            {item.description.length > 30
              ? item.description.substring(0, 40) + '...'
              : item.description}
          </Text>

          <TouchableOpacity
            onPress={() => {
              // console.log("item", item)
              dispatch(addItem(item));
              // setModal(true);
            }}
            style={StyleSheet.addCart_button}>
            <AntDesign name="shoppingcart" size={25} color="#FF5B55" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
