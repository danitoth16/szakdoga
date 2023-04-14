import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import { COLORS, icons } from '../constans';
import {windowHeight, windowWidth} from '../utils/Dimensions'


const SignUpScreen = ({navigation}) => {



    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <View style= {styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}
            style={{
                borderColor: '#fff',
                height:20,
                width:20,
                position: 'absolute',
                top: 10,
                left: 10,
            }}>
                <Image 
                    source={icons.back}
                    style={{
                        borderColor: '#fff',
                        height:20,
                        width:20,
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                        
                />
            </TouchableOpacity>
            <Text style={styles.text}>Create an account</Text>
                                   {/*Email*/}
            <View style= {styles.inputContainer}>
                <View style={{width:30, alignItems:'center'}}>
                    <Image 
                        source={icons.user}
                        style={{
                            borderColor: '#fff',
                            height:20,
                            width:20
                        }} 
                    />
                </View>
                <TextInput 
                    value={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    style= {styles.input}
                    numberOfLines={1}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect="false"
                    
                />
            </View>

                       {/*Password*/} 

            <View style= {styles.inputContainer}>
                <View style={{width:30, alignItems:'center'}}>
                    <Image 
                        source={icons.lock}
                        style={{
                            borderColor: '#fff',
                            height:20,
                            width:20
                        }} 
                    />
                </View>
                <TextInput 
                    value={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    style= {styles.input}
                    numberOfLines={1}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry={true}                   
                />
            </View>
                        {/*Confirm Password*/} 
            <View style= {styles.inputContainer}>
                <View style={{width:30, alignItems:'center'}}>
                    <Image 
                        source={icons.lock}
                        style={{
                            borderColor: '#fff',
                            height:20,
                            width:20
                        }} 
                    />
                </View>
                <TextInput 
                    value={confirmPassword}
                    onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                    style= {styles.input}
                    numberOfLines={1}
                    placeholder="Confirm Password"
                    placeholderTextColor="#666"
                    secureTextEntry={true}                   
                />
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("Feed")} 
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.textPrivate}>
                <Text>By registering, you confirm that accept our </Text>
                <TouchableOpacity onPress={() => alert('Terms clicked!')}>
                    <Text style={{color:COLORS.secondary}}>Terms of service </Text>
                </TouchableOpacity>
                <Text>and </Text>
                <TouchableOpacity onPress={() => alert('Privacy clicked!')}>
                    <Text style={{color:COLORS.secondary}}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <View 
                    style={{
                        width: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image 
                        source={icons.fb}
                        style={{
                            height:30,
                            width:30,
                        }} 
                    />
                </View>

                <View style={{justifyContent: 'center',alignItems: 'center', marginLeft:20}}>
                    <Text style={styles.buttonText}>Sign Up With Facebook</Text>
                </View>
            </TouchableOpacity>  

            
            <TouchableOpacity style={styles.buttonContainer}>
                <View 
                    style={{
                        width: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image 
                        source={icons.google}
                        style={{
                            height:30,
                            width:30,
                        }} 
                    />
                </View>

                <View style={{justifyContent: 'center',alignItems: 'center', marginLeft:20}}>
                    <Text style={styles.buttonText}>Sign Up With Google</Text>
                </View>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.navButtonText}>Already have an acount? Sign in here</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        //paddingTop: 50
    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    logo: {
      height: 100,
      width: 100,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 38,
      marginBottom: 10,
      color: COLORS.primary,
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.darkgray,
      fontFamily: 'Lato-Regular',
    },
    inputField : {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    input: {
        fontSize: 14,
        flex: 1,
        padding: 10,
        color: COLORS.black,
    },
    buttonContainer: {
        marginTop:10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: COLORS.primary,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.white,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 25,
        justifyContent: 'center',
      },

  });