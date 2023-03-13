import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Assets from '../assets';
import { Colors } from '../assets/constants/Colors';
import ButtonComponent from '../components/buttoncompone';
import deviceInfoModule from 'react-native-device-info';
import { FAB } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker';
import { Fonts } from '../assets/constants/fonts';
// import Lottie from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
import { WIDTH, HEIGHT } from '../assets/constants/Dimensions';
// import { Fonts } from '../assets/fonts/fonts';
import ImgAnimation from '../components/ImgAnimation';

let hasNotch = deviceInfoModule.hasNotch();

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  // ReAnimated Initials Values

  const progress = useSharedValue(0);
  const progressIndicator = useSharedValue(13);
  const progressIndicator1 = useSharedValue(13);
  const progressIndicator2 = useSharedValue(13);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  const reanimatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      width: progressIndicator.value,
    };
  }, []);
  const reanimatedIndicator1Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator1.value,
    };
  }, []);
  const reanimatedIndicator2Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator2.value,
    };
  }, []);
  const indicatorColor = useDerivedValue(() => {
    return withTiming(currentSlideIndex > 0 ? 0 : 1);
  });

  const reanimatedIndicatorColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      indicatorColor.value,
      [0, 1],
      [Colors.primary, Colors.secondary],
    );
    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    Orientation.lockToPortrait();
    if (currentSlideIndex > 0) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0);
    }
    if (currentSlideIndex === 0) {
      progressIndicator.value = withSpring(42);
    } else {
      progressIndicator.value = withSpring(13);
    }
    if (currentSlideIndex === 1) {
      progressIndicator1.value = withSpring(42);
    } else {
      progressIndicator1.value = withSpring(13);
    }
    if (currentSlideIndex === 2) {
      progressIndicator2.value = withSpring(42);
    } else {
      progressIndicator2.value = withSpring(13);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex]);

  // Onboard Slide Functions
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 3) {
      navigation.replace('Login');
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex === 0) {
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  
  return (
    <>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={WIDTH}
        onScrollEndDrag={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Indicators
        currentSlideIndex={currentSlideIndex}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        navigation={navigation}
        reanimatedStyle={reanimatedStyle}
        reanimatedIndicatorStyle={reanimatedIndicatorStyle}
        reanimatedIndicator1Style={reanimatedIndicator1Style}
        reanimatedIndicator2Style={reanimatedIndicator2Style}
        reanimatedIndicatorColorStyle={reanimatedIndicatorColorStyle}
      />
    </>
  );
};

export default Onboarding;

const Slide = ({ item }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH,
        height: HEIGHT,
      }}>
      <ImageBackground
        source={
          item.id === 1
            ? Assets.backgroundImages.whiteBG
            : Assets.backgroundImages.BackGroundBG
        }
        resizeMode="cover"
        style={[
          styles.image,
          {
            backgroundColor:
              item.id !== 1 ? Assets.backgroundImages.whiteBG : 'transparent',
          },
        ]}>
        {item.id === 1 && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}></View>
        )}
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.5,
            alignItems: 'center',
          }}>
          {item.id !== 1 && (
            <>
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
                <ImgAnimation Food1={item.Food1} />
                <ImgAnimation Food2={item.Food2} />
                {/* <Image source={item.Food1} resizeMode="contain" /> */}
              </View>
            </>
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: HEIGHT < 700 ? HEIGHT / 15 : HEIGHT / 12.5,
          }}>
          {item.id === 1 ? (
            <>
              <Text
                style={[
                  styles.title,
                  {
                    lineHeight: HEIGHT < 700 ? 40 : 55,
                  },
                ]}
                numberOfLines={2}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Text>
            </>
          ) : item.id === 2 ? (
            <>
              <Animated.Text
                style={[
                  styles.title,
                  { color: Colors.primary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={2}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Animated.Text>
            </>
          ) : item.id === 3 ? (
            <>
              <Text
                style={[
                  styles.title,
                  { color: Colors.primary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={2}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Text>
            </>
          ) : item.id === 3 ? (
            <>
              <Text
                style={[
                  styles.title,
                  { color: Colors.primary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={2}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Text>
            </>
          ) : item.id === 4 ? (
            <>
              <Text
                style={[
                  styles.title,
                  { color: Colors.primary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={2}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Text>
            </>
          ) : null}
          <Text
            style={[
              styles.subTitle,
              {
                color: item.id !== 1 ? '#fff' : Colors.tertiary,
                lineHeight: HEIGHT < 700 ? 25 : 30,
              },
            ]}
            numberOfLines={2}
            adjustsFontSizeToFit>
            {item.subtitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const Indicators = ({
  currentSlideIndex,
  goToPrevSlide,
  goToNextSlide,
  reanimatedStyle,
  reanimatedIndicatorStyle,
  reanimatedIndicator1Style,
  reanimatedIndicator2Style,
  reanimatedIndicatorColorStyle,
}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: hasNotch ? 25 : 15,
        left: 0,
        right: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: HEIGHT / 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.indicator,
                  index === 0 && reanimatedIndicatorStyle,
                  index === 1 && reanimatedIndicator1Style,
                  index === 2 && reanimatedIndicator2Style,
                  reanimatedIndicatorColorStyle,
                  currentSlideIndex == index && {
                    opacity: 1,
                  },
                ]}
              />
            );
          })}
        </View>
        <Animated.View style={[reanimatedStyle]}>
          {/* <FAB
          style={[
            styles.fab,
            {
              height: WIDTH < 375 ? 40 : 55,
              width: WIDTH < 375 ? 40 : 55,
            },
          ]}
          size="small"
          icon="arrow-left"
          color={Colors.secondary}
          onPress={() => goToNextSlide()}
        /> */}
          <TouchableOpacity
            onPress={() => goToNextSlide()}
            style={[
              styles.fab,
              { height: WIDTH < 375 ? 40 : 55, width: WIDTH < 375 ? 40 : 55 },
            ]}>
            <Image source={Assets.icon.playR} />
          </TouchableOpacity>
        </Animated.View>
        {currentSlideIndex == 0 ? (
          <ButtonComponent
            button1
            SvgICon
            buttonText="Lets Start"
            paddingHorizontal={WIDTH < 375 ? 12 : 5}
            icon="arrow-right"
            buttonColor={Colors.primary}
            textColor={Colors.secondary}
            onPress={() => goToNextSlide()}
            widthIcon={WIDTH < 375 ? 40 : 57}
            height={WIDTH < 375 ? 50 : 57}
            width={WIDTH < 375 ? 140 : 150}
            viewOnRight={true}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: HEIGHT,
    width: WIDTH,
    paddingTop: HEIGHT / 12.5,
  },
  title: {
    fontFamily: 'Crispy Seafood',
    fontSize: 34.25,
    fontWeight: 500,
    color: '#1E0203',
    letterSpacing: 1.75,
  },
  subTitle: {
    fontFamily: Fonts.default,
    fontSize: 16,
    fontWeight: 200,
    color: '#1E0203',
    marginTop: 10,
    marginBottom: 65,
  },
  indicator: {
    height: 13,
    width: 13,
    opacity: 0.5,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  fab: {
    height: 55,
    width: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

const slides = [
  {
    id: 1,
    title: '!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    id: 2,
    title: 'Get Yourself Healthy & Strong with Us!',
    Food1: Assets.FoodItems.FoodItem1,
    Food2: Assets.FoodItems.fooditem2,
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    // animation: Assets.animation.onboardAnimation2,
  },
  {
    id: 3,
    title: 'Transform your life for Better!',
    Food1: Assets.FoodItems.fooditem2,
    Food2: Assets.FoodItems.fooditem6,
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    // animation: Assets.animation.onboardAnimation3,
  },
  {
    id: 4,
    title: 'Transform your life for Better!',
    Food1: Assets.FoodItems.fooditem6,
    Food2: Assets.FoodItems.FoodItem1,
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    // animation: Assets.animation.onboardAnimation3,
  },
];
