import React, { Component } from 'react';
import { View, Text, InputAccessoryView , AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ___________________Screens___________________________
import SampleScreen from './src/screens/SampleScreen';
import test from './src/screens/test';
import BrowseScreen from './src/screens/Home/BrowseScreen';
import WelcomeScreen from './src/screens/Auth/WelcomeScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import CourseScreen from './src/screens/Home/CourseScreen';
import BuyCourseScreen from './src/screens/Home/BuyCourseScreen';
import YourCoursesScreen from './src/screens/Home/YourCoursesScreen';
import Splash from './src/screens/Splash/Splash';
import SignUp from './src/screens/Auth/SignupScreen';
import { routes } from './src/utils/Navigation/routes';
import PricingPage from './src/screens/PaymentOptions/PaymentOptionsScreen';
import CourseExplorerScreen from './src/screens/CoursesExplorer/CoursesExplorerScreen';
import MyCoursesScreen from './src/screens/MyCourses/MyCoursesScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen/CourseDetailScreen';
import VideoPlayerScreen from './src/screens/VideoPlayerScreen/VideoPlayerScreen';
import ReviewsRatingsScreen from './src/screens/CourseReviewsScreen/CourseReviewsScreen';
import AuthorScreen from './src/screens/AuthorDetailScreen/AuthorDetailScreen';
import FeedbackScreen from './src/screens/FeedbackScreen/Feedback.screen';




const Stack = createStackNavigator();


export default class App extends Component {


  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown:false,
            animation:"slide_from_right",
          }}>
          <Stack.Screen name="Splash" component={Splash} />

          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name={routes.login} component={LoginScreen}/>
          <Stack.Screen name={routes.signup} component={SignUp} />
          <Stack.Screen name={routes.pricingPage} component={PricingPage} />

          <Stack.Screen name={routes.home} component={HomeScreen} />
          <Stack.Screen name={routes.courseExplorer} component={CourseExplorerScreen} />
          <Stack.Screen name={routes.myCourses} component={MyCoursesScreen} />
          <Stack.Screen name={routes.profile} component={ProfileScreen} />
          <Stack.Screen name={routes.courseDetail} component={CourseDetailScreen} />
          <Stack.Screen name={routes.videoPlayer} component={VideoPlayerScreen} />
          <Stack.Screen name={routes.reviewsRatings} component={ReviewsRatingsScreen} />
          <Stack.Screen name={routes.AuthorDetail} component={AuthorScreen} />
          <Stack.Screen name={routes.feedbackscreen} component={FeedbackScreen} />

          <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
          <Stack.Screen name="YourCoursesScreen" component={YourCoursesScreen} />
          <Stack.Screen name="BuyCourseScreen" component={BuyCourseScreen} />

          </Stack.Navigator>
        </NavigationContainer>

    );
  }
}

