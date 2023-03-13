import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/inputs';
import ButtonComponent from '../components/buttoncompone';
import { FAB } from 'react-native-paper';
import ImgAnimation from '../components/ImgAnimation';
// import { Fonts } from '../assets/constants/Fonts';

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const delay = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500); // Delay in milliseconds

    return () => clearTimeout(delay);
  }, [slideAnim, opacityAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.backgroundImages.BackGroundBG}
        resizeMode="cover"
        style={styles.container}>
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.8,
            alignItems: 'center',
          }}>
          {/* <Image source={item.Food1} resizeMode="contain" />
           */}
          <View
            style={
              {
                // width: WIDTH < 375 ? 70 : 80,
                // height: WIDTH < 375 ? 70 : 80,
                // position: 'absolute',
                // // right: 0,
                // // top: 0,
                // left: 180,
                // top: -140,
              }
            }>
            <Image source={Assets.FoodItems.fooditem6} resizeMode="contain" style={{
              width: 300,
              height: 300,
              position: 'absolute',
              // right: -110,
              // right: 10,
              left: -60,
              top: -90,
            }} />
            <Image source={Assets.FoodItems.FoodItem1} style={{
              width: 150,
              height: 150,
              position: 'absolute',
              right: -250,
              top: 280,
            }} />
            {/* <Image source={item.Food1} resizeMode="contain" /> */}
          </View>
        </View>

        <Animated.View
          style={{
            transform: [{ translateY: slideAnim }],
            opacity: opacityAnim,
            paddingBottom: 10,
          }}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.contentContainer}>
              <View style={styles.loginTextContainer}>
                <View
                  style={{
                    width: 66,
                    height: 6,
                    backgroundColor: '#aAA',
                    borderRadius: 10,
                    opacity: 0.4,
                  }}
                />
                <Text style={styles.loginText}>Login</Text>
              </View>
              <View style={{ marginVertical: 5 }} />
              <Input
                placeholder="Username"
                text={data.username}
                setText={setData}
                formKey="username"
              />
              <View style={{ marginVertical: 10 }} />
              <Input
                placeholder="Password"
                text={data.password}
                setText={setData}
                formKey="password"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => setRememberMe(!rememberMe)}>
                  <Icon
                    name={rememberMe ? 'check-square' : 'square'}
                    size={20}
                    color={rememberMe ? Colors.Red : Colors.Red}
                  />
                  <Text
                    style={[
                      styles.text,
                      {
                        marginLeft: 5,
                        fontFamily: 'NoirPro-Regular',
                        color: Colors.tertiary,
                        opacity: 0.48,
                      },
                    ]}>
                    Remember me
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                  <Text
                    style={[
                      styles.text,
                      {
                        textDecorationLine: 'underline',
                        fontFamily: 'NoirPro-Regular',
                        color: Colors.tertiary,
                        opacity: 0.48,
                      },
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <ButtonComponent
                  button2
                  buttonText="Login"
                  buttonColor={Colors.Red}
                  textColor={Colors.secondary}
                  onPress={() => navigation.navigate('HomeScreen')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
                <Text
                  style={[styles.text, { color: Colors.tertiary, opacity: 0.5 }]}>
                  OR
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 'auto',
                  paddingTop: 5,
                  paddingHorizontal: 15,
                }}>
                <View style={styles.iconbtn}>
                  <Image source={Assets.icon.google} style={{}} />
                </View>
                <View style={styles.iconbtn}>
                  <Image source={Assets.icon.facebook} />
                </View>
                <View style={styles.iconbtn}>
                  <Image source={Assets.icon.twitter} style={{}} />
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'flex-end',
  },
  loginText: {
    fontSize: WIDTH <= 375 ? 20 : 25,
    fontFamily: 'NoirPro-SemiBold',
    backgroundColor: '#FFFF',
    marginRight: 2.5,
    top: 5,
    color: '#1E0203',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
    marginTop: 15,
    paddingTop: 25,
    paddingBottom: 25,
    width: WIDTH <= 375 ? 315 : 375,
    paddingHorizontal: 25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  iconbtn: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  loginTextContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    backgroundColor: '#FFFF',
    // top: -50,
    // left: 50,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 14,
    // fontFamily: Fonts.default,
    fontWeight: '200',
    letterSpacing: 0.7,
    color: Colors.tertiary,
  },
});
