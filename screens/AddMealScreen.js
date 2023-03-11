import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import GreyInput from '../components/greyInput';
import {CameraICon} from '../assets/Svg/SocialSvg';
import Mymodal from '../components/Mymodal';
import ButtonComponent from '../components/buttoncompone';
const AddMealScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
              marginTop: 15,
              paddingBottom: 10,
            }}>
            <Header
              header
              headText={'Add Meal'}
              onPress={() => navigation.goBack()}
              onPress1={() => setModalVisible(!modalVisible)}
              blueBtn
            />
            <View style={{alignSelf: 'center'}}>
              <View style={styles.contentContainere}>
                <CameraICon />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Upload meal {'\n'} image here
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <LinearGradient
                colors={['#FBF9F9', '#CCCB']}
                style={{
                  backgroundColor: '#FBF9F9',
                  borderRadius: 20,
                  padding: 15,
                  paddingTop: 15,
                  paddingBottom: 10,
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.43,
                  shadowRadius: 9.51,
                  elevation: 15,
                }}>
                <KeyboardAwareScrollView
                  keyboardShouldPersistTaps="handled"
                  enableOnAndroid={true}
                  enableAutomaticScroll={true}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{flexGrow: 1}}>
                  <View style={{}}>
                    <View style={{marginVertical: 5}} />
                    <View style={styles.loginTextContainer}>
                      <Text style={styles.loginText}>Add Meal</Text>
                    </View>
                    <View style={{width: '100%'}}>
                      <GreyInput
                        addText={'Add Meal Title'}
                        placeholder="Ingredient #1"
                        formKey="password"
                        height={44}
                      />
                    </View>
                    <View style={styles.loginTextContainer}>
                      <Text style={styles.loginText}>Add Description</Text>
                    </View>
                    <GreyInput
                      addText={'Add Description'}
                      placeholder="Discriptions......"
                      formKey="password"
                      numberOfLines={4}
                    />
                    <View style={styles.loginTextContainer}>
                      <Text style={styles.loginText}>Add Meal</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: '85%'}}>
                        <GreyInput
                          addText={'Add Meal Title'}
                          placeholder="Ingredient #1"
                          formKey="password"
                          height={44}
                        />
                        <View style={{width: '100%', flexDirection: 'row'}}>
                          <View style={{width: '100%'}}>
                            <GreyInput
                              addText={'Add Meal Title'}
                              placeholder="Ingredient #2"
                              formKey="password"
                              height={44}
                            />
                          </View>
                          <View>
                            <ButtonComponent
                              plusbtn
                              buttonText="+"
                              buttonColor={'red'}
                              //   textColor={Colors.secondary}
                              // onPress={() => navigation.navigate('MealDetails')}
                              height={WIDTH <= 375 ? 40 : 50}
                              width={WIDTH <= 375 ? 50 : 50}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.loginTextContainer}>
                      <Text style={styles.loginText}>Add Story</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: '85%'}}>
                        <GreyInput
                          addText={'Add Meal Title'}
                          placeholder="Story #1"
                          height={44}
                        />
                        <GreyInput
                          addText={'Add Meal Title'}
                          placeholder="Story #2"
                          height={44}
                        />
                        <View style={{width: '100%', flexDirection: 'row'}}>
                          <View style={{width: '100%'}}>
                            <GreyInput
                              addText={'Add Meal Title'}
                              placeholder="Story #3"
                              height={44}
                            />
                          </View>
                          <View>
                            <ButtonComponent
                              plusbtn
                              buttonText="+"
                              buttonColor={'red'}
                              //   textColor={Colors.secondary}
                              // onPress={() => navigation.navigate('MealDetails')}
                              height={WIDTH <= 375 ? 40 : 50}
                              width={WIDTH <= 375 ? 50 : 50}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </KeyboardAwareScrollView>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Mymodal
        modaltext1="Meal Added Successfully"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        innerButton={() => navigation.navigate('HomeScreen')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  contentContainere: {
    borderWidth: 1,
    borderStyle: 'dotted',
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // backgroundColor: '#FFFF',
    // borderRadius: 100,
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,
    // elevation: 15,
    // shadowColor: '#000',
    // paddingBottom: 4
  },
  contentContainer: {
    marginTop: 15,
    paddingVertical: 15,
    paddingVertical: 5,
    // margin: 5,
    // paddingLeft: 15,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    // paddingBottom: 15,
    borderRadius: 20,
    // width: WIDTH <= 375 ? 338 : 356,
    paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  loginText: {
    padding: 10,
    fontSize: WIDTH <= 375 ? 10 : 12,
    // fontFamily: Fonts.default,

    fontWeight: '700',

    color: '#1E0203',
  },
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
    marginTop: 25,
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
    // alignItems: 'center',
    // alignSelf: 'center',
    // position: 'absolute',
    // backgroundColor: '#FFFF',
    // top: -50,
    // left: 50,
  },
});

export default AddMealScreen;
