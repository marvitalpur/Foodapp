import { StyleSheet, Text, Image, View, Easing, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WIDTH } from '../assets/constants/Dimensions';

const ImgAnimation = ({ Food1, Food2 }) => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    // rotateValueHolder.setValue(0);
    // Animated.timing(rotateValueHolder, {
    //   toValue: 1,
    //   duration: 50,
    //   easing: Easing.linear,
    //   useNativeDriver: false,
    // }).start(() => startImageRotateFunction());
  };

  // const RotateData = rotateValueHolder.interpolate({
  //   inputRange: [1, 1],
  //   outputRange: ['0deg', '360deg'],
  // });
  const position = new Animated.ValueXY({x: 0, y: 0});
  const position1 = new Animated.ValueXY({x: 0, y: 0});
  const [animation] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   Animated.spring(position, {
  //     toValue: 250,
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();

  //   Animated.timing(animation, {
  //     toValue: {x: 200, y: 200},
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   console.log(animation.ValueXY);
  // }, []);
  // useEffect(() => {
  //   Animated.spring(position1, {
  //     toValue: -250,
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(animation, {
  //     toValue: {x: 200, y: 200},
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   console.log(animation.ValueXY);
  // }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0.6,
      duration: 9000,
      useNativeDriver: true,
    }).start();
  }, []);

  const rotate = animation.interpolate({
    inputRange: [1, 1],
    outputRange: ['360deg', '0deg'],
  });
  const scale = animation.interpolate({
    inputRange: [1, 1],
    outputRange: [2, 2],
  });
  const animatedStyle = {
    transform: [{rotate}, {scaleY: 1}],
  };

  useEffect(() => {
    startImageRotateFunction();
    setTimeout(() => {
      // navigation.replace('login');
    }, 3000);
  }, []);

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
          // right: -110,
          // right: 10,
          left: -80,
          top: -105,
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            paddingLeft: 30,
            transform: [{translateY: position.y}],
          }}>
          <Animated.Image
            source={Food1}
            resizeMode="contain"
            style={[
              { width: '100%' },
              animatedStyle
            ]}
          />
        </Animated.View>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -200,
          top: 200,
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            transform: [{translateY: position1.y}]
          }}>
          <Animated.Image
            source={Food2}
            resizeMode="contain"
            style={[
              { width: '100%' },
              //  animatedStyle
            ]}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default ImgAnimation;

const styles = StyleSheet.create({});
