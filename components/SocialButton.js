import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { COLORS, SIZES, icons } from '../constans';
import {windowHeight, windowWidth} from '../utils/Dimensions'

const SocialButton = (buttonTitle, color, backgroundColor, ...rest) => {
    return (
        <TouchableOpacity style={styles.buttonContainer, {backgroundColor: bgColor}} {...rest}>
            <View style={styles.iconWrapper}>
                <Image 
                    source={icons.fb}
                />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color:color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});