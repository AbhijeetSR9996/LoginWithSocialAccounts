import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Checkbox from '@react-native-community/checkbox';
import { NavigationContainer } from '@react-navigation/native';

const Contact = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = ({ navigation }) => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Please fill all the fields")
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}> Level up your knowledge </Text>
        <Text style={styles.description}> You can reach us anytime via singh@abhi.com </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your name </Text>
          <TextInput style={styles.inputStyle} placeholder={'Abhi Singh'} placeholderTextColor='#808080'
            value={name} onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your email </Text>
          <TextInput style={styles.inputStyle} placeholder={'demo@singh.com'} placeholderTextColor='#808080'
            value={email} onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your mobile number </Text>
          <TextInput style={styles.inputStyle} placeholder={'1234567890'} placeholderTextColor='#808080'
            value={phone} maxLength={10} keyboardType='numeric' onChangeText={(phone) => setPhone(phone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> How can we help you? </Text>
          <TextInput style={[styles.inputStyle, styles.multilineStyle]} placeholder={'Tell us about yourself'} placeholderTextColor='#808080'
            value={message} onChangeText={(message) => setMessage(message)}
            numberOfLines={5} multiline={true}
          />
        </View>

        <View style={styles.wrapper}>
          <Checkbox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? "#4630eb" : undefined}
          />
          <Text style={{ top: '2%', color: '#344055', }}> I have read and agree with Terms & Conditions </Text>
        </View>
        {/* <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: agree ? "#4630EB" : 'grey', }]} onPress={() => { navigation.navigate('Course'), submit }} disabled={!agree} > */}
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: agree ? "#4630EB" : 'grey', }]} onPress={() => navigation.navigate('Course')} disabled={!agree} >
          <Text style={styles.buttonText}> Contact Us </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    marginBottom: '20%'
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    //fontFamily: 'Nunito_600SemiBold'
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    //fontFamily: 'Nunito_700Bold'
  },
  inputContainer: {
    marginTop: 20
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25,
    //fontFamily: 'Nunito_700Bold'
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    color: '#000000',
  },
  multilineStyle: {
    paddingVertical: 4
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  buttonText: {
    color: '#fff'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: '-2%'
    //fontFamily: 'Nunito_700Bold'
  }
});

export default Contact;

