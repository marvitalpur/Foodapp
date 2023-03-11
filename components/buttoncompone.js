import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, FAB, TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';
import {Icon} from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../assets';
import {PlusSvg} from '../assets/Svg/SocialSvg';

const ButtonComponent = ({
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,
  shadow,
  paddingHorizontal,
  button1,
  button2,
  circleIcon,
  btntxt,
  widthIcon,
  bluebtn,
  SvgICon,
  icon1,
  icon,
  button3,
  plusbtn,
}) => {
  return (
    <>
      {button1 && (
        <TouchableRipple
          disabled={disabled}
          onPress={onPress}
          style={[
            styles.container,
            {height: height, width: width, backgroundColor: buttonColor},
          ]}>
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: icon ? 'space-between' : 'center',
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: textColor,

                fontSize: WIDTH <= 375 ? 12 : 16,
                fontFamily: 'Bahnschrift',
                fontWeight: 400,
                paddingHorizontal: 5,
              }}>
              {buttonText}
            </Text>
            {SvgICon && (
              <View style={{paddingHorizontal: paddingHorizontal}}>
                <View
                  style={{
                    backgroundColor: '#C00006',
                    borderRadius: 100,
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,
                    elevation: 15,
                  }}>
                  <Image source={Assets.icon.play} />
                </View>
              </View>
            )}
          </View>
        </TouchableRipple>
      )}
      {button2 && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            // width: width,
            // shadowColor: shadow,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 15,
          }}>
          <LinearGradient
            colors={['#C00006', '#1E020A']}
            style={[styles.btn1, {width: width, shadowColor: shadow}]}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'NoirPro-Medium',
                fontSize: 14,
              }}>
              {buttonText}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      {button3 && (
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={['#AAA', '#AAAA']}
            style={[
              styles.btn1,
              {
                width: width,
                shadowColor: shadow,
                borderWidth: 0.25,
                borderColor: '#AFADAD',
                flexDirection: 'row',
              },
            ]}>
            <Text
              style={{
                fontWeight: '400',
                color: '#1E0203',
                fontSize: 14,
                fontFamily: 'NoirPro-Medium',
              }}>
              {buttonText}
            </Text>
            {icon && (
              <>
                <View style={{paddingLeft: 10}}>
                  <PlusSvg />
                </View>
              </>
            )}
          </LinearGradient>
        </TouchableOpacity>
      )}
      {bluebtn && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: width,
            shadowColor: shadow,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 15,
          }}>
          <LinearGradient
            colors={['#00A0C0', '#176270']}
            style={[styles.btn1, {width: width, shadowColor: shadow}]}>
            <Text
              style={{
                fontWeight: '400',
                color: '#fff',
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              {buttonText}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      {plusbtn && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            // width: width,
            // shadowColor: shadow,
            justifyContent: 'center',
            alignSelf: 'flex-end',
            top: 5,
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: 'red',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 15,
          }}>
          <Text
            style={{
              fontWeight: '400',
              color: '#fff',
              fontSize: 18,
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  box: {
    width: '60%',
    aspectRatio: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  fab: {
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  btn1: {
    shadowOffset: {
      width: 50,
      height: 52,
    },
    shadowColor: 'red',
    shadowOpacity: 20.58,
    shadowRadius: 16.0,
    elevation: 24,

    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    // elevation: 10,
    // shadowColor: '#aaaa',
    borderRadius: 30,
  },
  RedICon: {
    shadowOffset: {
      width: 50,
      height: 52,
    },
    shadowColor: 'red',
    shadowOpacity: 20.58,
    shadowRadius: 16.0,
    elevation: 24,

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    // elevation: 10,
    // shadowColor: '#aaaa',
    borderRadius: 100,
  },
});

{
  /* <Button
      disabled={disabled}
      icon={icon}
      mode="contained"
      buttonColor={buttonColor}
      textColor={textColor}
      contentStyle={{
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'center',
      }}
      style={{
        height: height,
        width: width,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: Colors.tertiary,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
      labelStyle={{fontSize: 22}}
      onPress={onPress}>
      <Text style={{fontSize: 16, fontFamily: 'Bahnschrift', fontWeight: 400}}>
        {buttonText}
      </Text>
    </Button> */
}
