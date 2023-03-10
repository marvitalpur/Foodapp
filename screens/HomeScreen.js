import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchbarCompo from '../components/searchbar';
import ButtonComponent from '../components/buttoncompone';
import {WIDTH} from '../assets/constants/Dimensions';
import Assets from '../assets';
import {MenuIcon} from '../assets/Svg/SocialSvg';
import CardCompoLG from '../components/cardCompoLg';
import {Colors} from '../assets/constants/Colors';
import MyTooltip from '../components/tooltipCompo';

const HomeScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onCloseTooltip = () => {
    setIsVisible(false);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <View style={{paddingHorizontal: 15}}>
            <View
              style={{
                flex: 1,
                marginTop: 'auto',
                paddingTop: 15,
                marginTop: 10,
              }}>
              <Header
                homeHeader
                onPress={() => navigation.navigate('CartScreen')}
              />
              <View>
                <SearchbarCompo />
              </View>
              <View style={{marginVertical: 10}} />
              <ButtonComponent
                button3
                buttonText="Add Meal"
                paddingHorizontal={WIDTH < 375 ? 5 : 15}
                icon="arrow-right"
                onPress={() => navigation.navigate('AddMealScreen')}
                widthIcon={WIDTH < 375 ? 40 : 40}
                height={WIDTH < 375 ? 40 : 40}
                width={WIDTH < 375 ? 370 : 370}
              />
              <View style={styles.row}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[
                      styles.Text,
                      {
                        backgroundColor: Colors.BackgroundColorW,
                        position: 'absolute',
                        bottom: -20,
                      },
                    ]}>
                    My Meals
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingBottom: 15,
                    position: 'absolute',
                    top: 40,
                    right: 0,
                    backgroundColor: '#EEEBEB',
                  }}>
                  <View
                    activeOpacity={1}
                    style={[styles.button, {position: 'absolute'}]}>
                    <MyTooltip
                      isVisible={isVisible}
                      onClose={onCloseTooltip}
                      setVisible={() => setIsVisible(!isVisible)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: WIDTH <= 375 ? 375 : 370,
            width: WIDTH <= 375 ? 310 : 370,
            marginTop: 15,
            alignSelf: 'center',
          }}>
          <ScrollView nestedScrollEnabled={true} contentContainerStyle={{}}>
            <CardCompoLG
              checkButton
              shadow={'#C00006'}
              bgColor={'#C00006'}
              FoodImage={Assets.FoodItems.FoodItem1}
              ButtonComponent={
                <ButtonComponent
                  button2
                  buttonText="View Full"
                  buttonColor={'red'}
                  //   textColor={Colors.secondary}
                  onPress={() => navigation.navigate('MealDetails')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              }
            />
            <View style={{padding: 15}} />
            <CardCompoLG
              checkButton
              shadow={'#00A0C0'}
              bgColor={'#00A0C0'}
              FoodImage={Assets.FoodItems.FoodItem1}
              ButtonComponent={
                <ButtonComponent
                  bluebtn
                  buttonText="View Full"
                  buttonColor={'red'}
                  //   textColor={Colors.secondary}
                  onPress={() => navigation.navigate('MealDetails')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              }
            />
            <View style={{padding: 5}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  row: {
    borderColor: Colors.Red,
    // marginVertical: 25,
    // paddingTop: 15,
    borderBottomWidth: 1,
    height: 20,
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#fff',
    right: 0,
    bottom: 10,
  },
  Text: {
    fontFamily: 'NoirPro-Regular',
    color: '#190C0C',
    fontSize: 28,
    paddingHorizontal: 5,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 0,

    backgroundColor: '#EEEBEB',

    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
