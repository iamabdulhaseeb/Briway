import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Text, ActivityIndicator } from 'react-native';
import { getUser } from '../../utils/Services/Authservice';
import { routes } from '../../utils/Navigation/routes';

const IMAGE_HEIGHT = 200;
const ANIMATION_DURATION = 3000; // in milliseconds

const App = (props) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const [showLoader,setShowLoader] = useState(false);

  const _checkAuth = async() => {
    const userExists = await getUser();
    if(userExists) {
      props.navigation.replace(routes.home)
    } else {
      props.navigation.replace(routes.login);
    }
    setShowLoader(false);

  }

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 50,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setShowLoader(true);
      _checkAuth();
    }, 3000);
   
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, { transform: [{ translateY }] }]}
        source={require('../../../logo.png')}
      />
      {
        showLoader ? 
        <ActivityIndicator
        size='large'
        color={'white'}
        />
        :
        null
      }
      {/* <Animated.View style={[styles.textContainer, { opacity: fadeIn }]}>
        <Text style={styles.text}>LEARN</Text>
        <Text style={styles.text}>RISE &amp; SHINE</Text>
      </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
    resizeMode:'contain'
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;