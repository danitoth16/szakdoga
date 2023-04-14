import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import SocialButton from '../components/SocialButton';
import { COLORS, icons } from '../constans';
import {windowHeight, windowWidth} from '../utils/Dimensions'


const Login = ({navigation}) => {



    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style= {styles.container}>
            <Image 
                source= {icons.castle}
                style={styles.logo}
            />
            <Text style={styles.text}>Tripo</Text>

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
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("Feed")} 
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
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
                        source={icons.fb}
                        style={{
                            height:30,
                            width:30,
                        }} 
                    />
                </View>

                <View style={{justifyContent: 'center',alignItems: 'center', marginLeft:20}}>
                    <Text style={styles.buttonText}>Sign In With Facebook</Text>
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
                    <Text style={styles.buttonText}>Sign In With Google</Text>
                </View>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Login;

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
  });