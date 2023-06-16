/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import Star from '../images/Star.png';
import FontIcon5 from 'react-native-vector-icons/FontAwesome5';
import Context from './Context';
interface IProps {
  navigation?: any;
  route?: any;
}
interface IState {
  quntity: number;
}
export class ItemDetsils extends Component<IProps, IState> {
  state = {
    quntity: 1,
  };
  onPressPluse = () => {
    this.setState({quntity: this.state.quntity + 1});
  };
  onPressMinus = () => {
    if (this.state.quntity > 1) {
      this.setState({quntity: this.state.quntity - 1});
    }
  };
  render() {
    const {quntity} = this.state;
    const itemData = this.props.route.params;
    return (
      <Context.Consumer>
        {context => {
          return (
            <View>
              <FlatList
                horizontal
                keyExtractor={(item, index) => index.toString()}
                data={itemData.images}
                renderItem={({item}) => {
                  console.log(item);
                  return (
                    <Image
                      resizeMode="contain"
                      style={styles.itemImage}
                      source={{uri: `${item}`}}
                    />
                  );
                }}
              />
              {/* <Image
                style={styles.itemImage}
                source={{uri: `${itemData.thumbnail}`}}
              /> */}
              <View style={styles.itemDataCard}>
                <View style={styles.namePriceCard}>
                  <Text style={styles.itemTitle}>{itemData.title}</Text>
                  <Text style={styles.itemPrice}>${itemData.price}</Text>
                </View>
                <View style={styles.namePriceCard}>
                  <Text style={styles.AvailabilityText}>Availability</Text>
                  <Text style={styles.inStockText}>In Stock</Text>
                </View>
                <View style={styles.namePriceCard}>
                  <Text style={styles.AvailabilityText}>Rating</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.starImg}
                    source={Star}
                  />
                </View>
                <Text style={styles.lineText}>
                  ___________________________________________________
                </Text>
                <View style={styles.QuntityMainCard}>
                  <Text style={styles.AvailabilityText}>Quantity</Text>
                  <View style={styles.QuntityCard}>
                    <TouchableOpacity
                      style={styles.incrementCrad}
                      onPress={this.onPressMinus}>
                      <Text style={styles.plusText}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quntityNum}>
                      <Text>{this.state.quntity}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.incrementCrad}
                      onPress={this.onPressPluse}>
                      <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.namePriceCard}>
                  <Text style={styles.itemTitle}>Total</Text>
                  <Text style={styles.itemPrice}>
                    ${itemData.price * quntity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.AddToCartBtn}
                  onPress={() => {
                    context.addCartData({
                      ...itemData,
                      quntity: this.state.quntity,
                    });
                    Alert.alert(
                      'Congrats',
                      'item is succesfully added to cart',
                    );
                  }}>
                  <FontIcon5 name="shopping-cart" size={15} color="#fff" />
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Context.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  itemDetailsCrad: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 360,
    height: 300,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 22,
    maxWidth: 210,
    fontWeight: '500',
    color: '#2E2D2D',
  },
  itemPrice: {
    color: '#9682B6',
    fontSize: 22,
    fontWeight: '500',
  },
  AvailabilityText: {
    color: '#2E2D2D',
    fontSize: 15,
  },
  inStockText: {
    color: '#1ECA2F',
    fontSize: 18,
  },
  itemDataCard: {
    padding: 15,
  },
  namePriceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  starImg: {
    height: 30,
  },
  lineText: {
    textAlign: 'center',
  },
  QuntityMainCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  QuntityCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(129, 138, 152, 0.2)',
    borderRadius: 8,
  },
  quntityNum: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  incrementCrad: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  plusText: {
    color: '#2E2D2D',
    fontSize: 20,
    fontWeight: '400',
  },
  AddToCartBtn: {
    backgroundColor: '#9682B6',
    width: 200,
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default ItemDetsils;
