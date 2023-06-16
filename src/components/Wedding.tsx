import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import All from '../images/All.png';
import Image1 from '../images/Image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.png';
import Image4 from '../images/image4.png';
import CardIma1 from '../images/CardImg1.png'
import CardIma2 from '../images/CardImg2.png'
import CardIma3 from '../images/CardImg3.png'
import CardIma4 from '../images/CardImg4.png'
import Star from '../images/Star.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const weddingList = [
  {
    id: '1',
    image: All,
    name: 'All',
  },
  {
    id: '2',
    image: Image1,
    name: 'Bouquet',
  },
  {
    id: '3',
    image: Image4,
    name: 'Table',
  },
  {
    id: '4',
    image: Image3,
    name: 'Aisle',
  },
  {
    id: '5',
    image: Image2,
    name: 'Accessories',
  },
  {
    id: '6',
    image: Image4,
    name: 'Table',
  },
];
const weddingCards = [
  {
    id: '1',
    image: CardIma1,
    name: 'Spark',
    price: '$90',
  },
  {
    id: '2',
    image: CardIma2,
    name: 'Magic',
    price: '$70',
  },
  {
    id: '3',
    image: CardIma3,
    name: 'White',
    price: '$98',
  },
  {
    id: '4',
    image: CardIma4,
    name: 'Soft',
    price: '$60',
  },
];

interface IProps {
  navigation?: any;
}
export class Wedding extends Component<IProps> {
  onPressWeddingBtn = (id: string) => {
    console.log(id);
    if (id === '1') {
      this.props.navigation.navigate('Catlog');
    }
  };
  render() {
    return (
      <View style={styles.weddingMAinCrad}>
        <View style={styles.helpCrad}>
          <View>
            <Text style={styles.needHelpText}>Need help?</Text>
            <Text style={styles.appointmentText}>
              Make an appointment or chat with us.
            </Text>
          </View>
          <Icons name="calendar" size={45} color="#F4F4F4" />
        </View>
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString()}
          data={weddingList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.statusCrad}
                onPress={() => {
                  this.onPressWeddingBtn(item.id);
                }}>
                <Image source={item.image} style={styles.statusImg} />
                <Text style={styles.statusText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.weddingCrad2}>
          <Text style={styles.PopularityText}>Popularity</Text>
          <FlatList
            horizontal
            keyExtractor={item => item.id.toString()}
            data={weddingCards}
            renderItem={({item}) => {
              return (
                <View style={styles.weddingImgCArd}>
                  <Image source={item.image} style={styles.weddingImg} />
                  <View style={styles.starCard}>
                    <View>
                      <Text style={styles.weddingCardText}>{item.name}</Text>
                      <Text>{item.price}</Text>
                    </View>
                    <Image style={styles.starImg} source={Star} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weddingMAinCrad: {
    marginTop: 15,
  },
  helpCrad: {
    backgroundColor: '#9682B6',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  needHelpText: {
    color: '#F4F4F4',
    fontSize: 30,
    fontWeight: '400',
  },
  appointmentText: {
    color: '#F4F4F4',
    fontSize: 15,
  },
  statusCrad: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImg: {
    height: 60,
    width: 60,
  },
  statusText: {
    color: '#2E2D2D',
    fontSize: 12,
    marginTop: 8,
  },
  PopularityText: {
    fontSize: 25,
    color: '#2E2D2D',
    marginBottom: 10,
  },
  weddingImg: {
    height: 150,
    width: 250,
    borderRadius: 10,
  },
  weddingCrad2: {
    paddingTop: 20,
  },
  weddingImgCArd: {
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
  },
  weddingCardText: {
    color: '#9682B6',
    fontSize: 25,
  },
  starCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Wedding;
