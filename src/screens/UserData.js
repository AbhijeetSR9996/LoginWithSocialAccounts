import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import Data from '../api/Data';

const UserData = ({ navigation }) => {

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          {/* <Image style={styles.imgStyle} source={{ uri: item.image }} /> */}
          <Image style={styles.imgStyle} source={require('../assets/pexels-photo-220453.jpeg')} />
        </View>
        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}> Bio Data </Text>
          <Text style={styles.idNumber}>
            {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.myName}> Name: {item.name} </Text>
          <Text style={styles.myName}> Email: {item.email}</Text>
          <Text style={styles.myName}> Mobile: {item.mobile}</Text>
          <Text style={[styles.myName, { textTransform: 'lowercase' }]}> Website: {item.website}</Text>
        </View>
      </View>
    )
  }


  return (
    <View>
      <Text style={styles.mainHeader}>LIST OF STUDENTS</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Data} renderItem={showUserData} horizontal />
    </View>
  );

};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 15,
    //backgroundColor: '#ebedee',
    backgroundColor: '#000'
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353535',
    paddingVertical: 10,
    //fontFamily: 'Nunito_600SemiBold'
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
    //fontFamily: 'Nunito_600SemiBold'
  },
  bioData: {
    fontSize: 30,
    color: '#fff',
    //fontFamily: 'Nunito_600SemiBold'
  },
  mainHeader: {
    fontSize: 30,
    color: '#a18ce5',
    textAlign: 'center',
    //fontFamily: 'Nunito_700Bold',
    marginTop: 30
  },
  imgContainer: {
    padding: 10
  },
  imgStyle: {
    width: '100%',
    height: 180
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 0,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',

  }
});

export default UserData;

