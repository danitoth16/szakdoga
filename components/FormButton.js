import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../constans';
import {windowHeight, windowWidth} from '../utils/Dimensions'

const FormButton = (buttonTitle, ...rest) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop:10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: COLORS.Gray,
        padding: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: SIZES.body3,
        fontWeight: 18,
        color: COLORS.primary,
    },
});