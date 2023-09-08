import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import StyleSheet from '../../StyleSheet';
import Header from '../../Component/Header';
import Cart from 'react-native-vector-icons/AntDesign';
import {allCategories, allProducts, specificCategory} from '../../Lib/api';
import ProductItem from '../../Component/ProductItem';
const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  useEffect(() => {
    allProducts({url: 'products'}).then(res => {
      setProducts(res.products);
    });
    allCategories({url: `categories`}).then(res => {
      setCategories(res);
    });
  }, []);
  const categorySelect = item => {
    setCategory(item);
    specificCategory({url: `${item}`}).then(res => {
      console.log('res of specific category', res);
      setProducts(res.products);
    });
  };
  const renderItem = ({item}) => (
    <ProductItem item={item} navigation={navigation} />
  );
  const renderItemHeader = ({item}) => (
    <TouchableOpacity
      onPress={() => categorySelect(item)}
      style={[
        StyleSheet.categoryStyle,
        {backgroundColor: category == item ? 'red' : 'white'},
      ]}>
      <Text style={{color: category == item ? 'white' : 'black'}}>{item}</Text>
    </TouchableOpacity>
  );
  const listHeader = () => (
    <FlatList data={categories} horizontal renderItem={renderItemHeader} />
  );
  return (
    <View style={StyleSheet.homeMain}>
      <Header
        name={'Home'}
        rightIcon={<Cart name="shoppingcart" size={25} color={'white'} />}
        rightIconOnPress={() => navigation.navigate('Cart')}
      />
      <View style={{height: '90%'}}>
        <FlatList
          data={products}
          ListHeaderComponent={listHeader}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Home;
