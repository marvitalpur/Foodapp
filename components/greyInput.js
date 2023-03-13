import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Menu, TextInput, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

import Icon from 'react-native-vector-icons/Feather';
import {WIDTH} from '../assets/constants/Dimensions';
import {colors} from 'react-native-swiper-flatlist/src/themes';
const GreyInput = ({
  text,
  setText,
  placeholder,
  formKey,
  gender,
  height,
  addText,
  textarea,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <>
      <TextInput
        placeholder={placeholder}
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        selectionColor="#000"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor={'#1E0203'}
        theme={{roundness: 10}}
        style={{
          margin: 5,
          // fontFamily: Fonts.default,
          fontWeight: '400',
          height: height,
          // opacity: text.length < 1 ? 0.5 : 1,
          fontSize: 14,
          borderRadius: 10,
          backgroundColor: Colors.primary,
          shadowColor: Colors.tertiary,

          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,

          elevation: 5,
        }}
      />
    </>
  );
};

export default GreyInput;
const styles = StyleSheet.create({
  loginText: {
    padding: 10,
    fontSize: WIDTH <= 375 ? 10 : 12,
    // fontFamily: Fonts.default,
    fontWeight: '700',
    color: '#1E0203',
  },
  loginTextContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // alignSelf: 'center',
    // position: 'absolute',
    // backgroundColor: '#FFFF',
    // top: -50,
    // left: 50,
  },
});
