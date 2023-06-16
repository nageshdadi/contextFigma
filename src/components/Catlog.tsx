import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';

import Icons from 'react-native-vector-icons/AntDesign';
import FontIcon5 from 'react-native-vector-icons/FontAwesome5';
const apiStatusValues = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};
interface IProps {
  navigation?: any;
}
interface IState {
  productDetails: any[];
  isModelVisible: boolean;
  itemData: any;
  searchText: string;
  apiStatus: string;
}
export class Catlog extends Component<IProps, IState> {
  state = {
    productDetails: [],
    isModelVisible: false,
    itemData: null,
    searchText: '',
    apiStatus: apiStatusValues.initial,
  };
  componentDidMount() {
    this.getProductDetails();
  }
  getProductDetails = async () => {
    this.setState({apiStatus: apiStatusValues.inProgress});
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    if (response.ok) {
      this.setState({
        productDetails: data.products,
        apiStatus: apiStatusValues.success,
      });
    }
  };
  onPressItem = (data: any) => {
    this.props.navigation.navigate('ItemDetails', {...data});
  };

  getAPIInProgressView = () => (
    <View style={styles.loadingCard}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );

  getAPISucessView = () => {
    const {searchText, productDetails} = this.state;
    const searchName = searchText.trim();
    const filteredData = productDetails.filter((each: any) =>
      each.title.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()),
    );
    return (
      <ScrollView>
        <View style={styles.prodectsCrad}>
          {filteredData.map((each: any) => (
            <TouchableOpacity
              key={each.id}
              style={styles.itemCrad}
              onPress={() => {
                this.onPressItem(each);
              }}>
              <Image
                style={styles.thumbImg}
                resizeMode="contain"
                source={{uri: `${each.thumbnail}`}}
              />
              <Text style={styles.textItem}>{each.title}</Text>
              <View style={styles.cartCard}>
                <Text style={styles.textPrice}>${each.price}</Text>
                <FontIcon5 name="shopping-cart" size={15} color="#9682B6" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };
  apiStatusCheck = () => {
    const {apiStatus} = this.state;
    switch (apiStatus) {
      case apiStatusValues.success:
        return this.getAPISucessView();
      case apiStatusValues.inProgress:
        return this.getAPIInProgressView();
      default:
        return null;
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.catlogMainCard}>
        <View style={styles.topCard}>
          <View style={styles.topArrowCard}>
            <Icons name="arrowleft" size={30} />
            <Text style={styles.BridalBouquetText}>Bridal Bouquet</Text>
          </View>
          <View style={styles.topArrowCard}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here"
              onChangeText={(newText: string) =>
                this.setState({searchText: newText})
              }
            />
            <Icons name="search1" size={30} />
          </View>
        </View>
        <View style={styles.topCard}>
          <Text style={styles.CatlogText}>Catalog</Text>
          <FontIcon5 name="sliders-h" size={30} />
        </View>
        {this.apiStatusCheck()}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  catlogMainCard: {
    flex: 1,
    padding: 15,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  topArrowCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BridalBouquetText: {
    color: '#2E2D2D',
    fontSize: 22,
    marginLeft: 8,
  },
  searchInput: {
    marginRight: 7,
    width: 100,
    borderRadius: 8,
  },
  CatlogText: {
    fontSize: 25,
    color: '#2E2D2D',
    fontWeight: '400',
  },
  thumbImg: {
    height: 100,
    width: 100,
    margin: 10,
  },
  prodectsCrad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemCrad: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  cartCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    color: '#2E2D2D',
    maxWidth: 120,
  },
  textPrice: {
    color: '#9682B6',
    fontWeight: '500',
  },
  modelCard: {
    height: 675,
    backgroundColor: '#fff',
  },
  modelImg: {
    height: 500,
    width: '100%',
  },
  loadingCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Catlog;
