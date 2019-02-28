import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Deck from './src/Deck';
// import {Card,Button} from 'react-native-elements'

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

export default class App extends React.Component {
  renderCard = item => {
    return (
      <View key={item.id} style={styles.card}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.title}>{item.text}</Text>
        <Text style={styles.imageLabel}>I can customize the Card further.</Text>
        <TouchableOpacity icon={{ name: 'code' }} style={styles.button}>
          <Text style={styles.buttonText}>View Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderNoMoreCards() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>All Done!</Text>
        <Text style={styles.imageLabel}>There's no more content here!</Text>
        <TouchableOpacity icon={{ name: 'code' }} style={styles.button}>
          <Text style={styles.buttonText}>Get More!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize:25}}>Swipe</Text>
        <Deck 
          data={DATA} 
          renderCard={this.renderCard} 
          renderNoMoreCards={this.renderNoMoreCards} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#fff',
  },
  card: {
    padding:1,
    borderColor: '#90C0F0',
    borderWidth:1,
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
    // borderRadius: 20,
    backgroundColor: '#98CCFB',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#03A9F4',
    height: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  buttonText:{
    // paddingVertical:10,
    textAlign: 'center',
  },
  image: {
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    minHeight: 200,
    minWidth: '100%',
    
  },
  imageLabel: {
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'center',
  },
});
