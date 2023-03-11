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
    <View style={styles.conatainer}>
      <View style={styles.box1}>
        <View style={{flex: 1, marginTop: 15, paddingHorizontal: 25}}>
          <Header
            homeHeader
            onPress={() => navigation.navigate('CartScreen')}
          />
        </View>
        <View style={{flex: 1, marginTop: 15, paddingHorizontal: 25}}>
          <SearchbarCompo />
        </View>
        <View style={{flex: 1}}>
          <ButtonComponent
            button3
            buttonText="Add Meal"
            // paddingHorizontal={WIDTH < 375 ? 5 : 5}
            icon="arrow-right"
            onPress={() => navigation.navigate('AddMealScreen')}
            widthIcon={WIDTH < 375 ? 40 : 40}
            height={WIDTH < 375 ? 40 : 40}
            width={'90%'}
          />
        </View>
        <View style={{flex: 1, marginTop: 15, paddingHorizontal: 25}}>
          <View style={styles.row}>
            <View style={styles.containerrow}>
              <View style={styles.rowitem1}>
                <Text
                  style={[
                    styles.Text,
                    {
                      //   backgroundColor: Colors.BackgroundColorW,
                    },
                  ]}>
                  My Meals
                </Text>
              </View>
              <View style={[styles.rowitem2, {height: 1}]}></View>
              <View style={styles.rowitem3}>
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
      <View style={styles.box2}>
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: 'green',
    backgroundColor: Colors.BackgroundColorW,
  },
  box1: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  box2: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  containerrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  rowitem1: {
    flex: 2,
    // height: '100%',
    // backgroundColor: 'red',
  },
  rowitem2: {
    paddingHorizontal: 5,
    top: 3,
    flex: 2,
    // height: '100%',
    backgroundColor: 'red',
  },
  rowitem3: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'blue',
    alignItems: 'flex-end',
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
  button1: {
    position: 'absolute',
    bottom: 16,
    right: 0,

    backgroundColor: '#EEEBEB',

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
