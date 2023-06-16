/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Context from './Context';
import Star from '../images/Star.png';
import EmptyCartImg from '../images/emptyCart.png';
import Icon from 'react-native-vector-icons/AntDesign';
interface IProps {
  navigation?: any;
}
export class Cart extends Component<IProps> {
  render() {
    return (
      <Context.Consumer>
        {context => {
          let totalBill = 0;
          context.cartData.map(
            (each: any) => (totalBill = totalBill + each.price * each.quntity),
          );
          console.log(totalBill);
          return (
            <View style={styles.mainCartCard}>
              <Text style={styles.cartMainText}>Cart</Text>
              {context.cartData.length === 0 && (
                <View style={styles.emptyCartCard}>
                  <Image
                    resizeMode="contain"
                    style={styles.emptyCartImg}
                    source={EmptyCartImg}
                  />
                  <Text style={styles.emptyCartText}>Empty Cart</Text>
                </View>
              )}
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={context.cartData}
                renderItem={({item}: {item: any}) => {
                  return (
                    <TouchableOpacity
                      style={styles.cartItemCard}
                      onPress={() => {
                        this.props.navigation.navigate('ItemDetails', {
                          ...item,
                        });
                      }}>
                      <Image
                        resizeMode="contain"
                        style={styles.imagCart}
                        source={{uri: `${item.thumbnail}`}}
                      />
                      <View>
                        <View style={styles.deleteCard}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              context.deleteCartData(item.id);
                            }}>
                            <Icon name="delete" size={25} />
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.brandtext}>
                          brand: {item.brand},{' '}
                          <Text>category:{item.category}</Text>
                        </Text>
                        <Image
                          resizeMode="contain"
                          style={styles.starImg}
                          source={Star}
                        />
                        <View style={styles.priceCard}>
                          <Text>Qty: {item.quntity}</Text>
                          <Text style={styles.priceText}>
                            ${item.price * item.quntity}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
              {context.cartData.length !== 0 && (
                <View style={styles.totalCard}>
                  <View>
                    <Text style={styles.titleText}>Total Amount</Text>
                    <Text style={styles.priceText}>${totalBill}</Text>
                  </View>
                  <TouchableOpacity style={styles.continueBtn}>
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
      </Context.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  mainCartCard: {
    flex: 1,
    padding: 15,
  },
  cartMainText: {
    fontSize: 30,
    color: '#000',
    marginBottom: 15,
  },
  emptyCartCard: {
    height: 500,
    width: 350,
  },
  emptyCartImg: {
    height: 450,
    width: 350,
  },
  emptyCartText: {
    fontSize: 30,
    textAlign: 'center',
  },
  cartItemCard: {
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagCart: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  deleteCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandtext: {
    width: 180,
  },
  starImg: {
    height: 30,
  },
  titleText: {
    color: '#2E2D2D',
    fontSize: 20,
    width: 180,
  },
  priceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
  },
  priceText: {
    color: '#1ECA2F',
    fontSize: 18,
  },
  totalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#2E2D2D',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  continueBtn: {
    backgroundColor: '#f2be2e',
    width: 150,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  continueText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Cart;
