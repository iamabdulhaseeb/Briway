import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { routes } from '../../utils/Navigation/routes';
import { useNavigation } from '@react-navigation/native';
const PricingPage = (props) => {
  const plans = [
    {
      name: 'Monthly Plan',
      price: '$19.99/month',
      description: 'Access to all courses',
      courses: ['Course 1', 'Course 2', 'Course 3'],
    },
    {
      name: 'Annual Plan',
      price: '$199.99/year',
      description: 'Save 20%! Access to all courses',
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'],
    },
  ];

  const handlePurchase = (plan) => {
    // Handle purchase logic here
    alert(`Purchased ${plan.name}`);
  };
 const BottomButtons = () => {
    const buttonStyles = {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
           
            paddingBottom: 20,
            bottom:20
          },
          circularButton: {
            width: 55,
            height: 55,
            borderRadius: 55/2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          skipButton: {
            backgroundColor: 'white',
            paddingHorizontal: 40,
            paddingVertical: 5,
            borderRadius: 30,
            justifyContent:'center',
            alignItems:'center'
          },
          skipButtonText: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          },
    }
    return (
        <View style={buttonStyles.container}>
        <TouchableOpacity style={buttonStyles.circularButton}>
          {/* <Ionicons name="ios-chevron-back" size={24} color="white" /> */}
          <Text style={buttonStyles.skipButtonText}>Back</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
            props.navigation.navigate(routes.home)
        }}
        style={buttonStyles.skipButton}>
          <Text style={buttonStyles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    )
 }
  return (
    <View style={styles.container}>
        <Image
        source={require('../../../logo.png')}
        style={{
            width:230,
            height:100,
            // resizeMode:'center',
            alignSelf:'center'
        }}
        />
      <Text style={styles.header}>Choose Your Plan</Text>
      {plans.map((plan, index) => (
        <View key={index} style={styles.planCard}>
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planDescription}>{plan.description}</Text>
          <Text style={styles.planCourses}>
            Included Courses: {plan.courses.join(', ')}
          </Text>
          <TouchableOpacity
            style={styles.purchaseButton}
            onPress={() => handlePurchase(plan)}
          >
            <Text style={styles.purchaseButtonText}>Purchase Now</Text>
          </TouchableOpacity>
        </View>
      ))}
      {/* <BottomButtons/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 20,
  },
  header: {
    fontSize: 22,
    color: 'white',
    fontWeight: '800',
    marginBottom: 20,
  },
  planCard: {
    backgroundColor: '#1F4068',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  planName: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 18,
    color: '#FFD700',
    marginVertical: 5,
  },
  planDescription: {
    fontSize: 16,
    color: '#D1D1D1',
    marginBottom: 10,
  },
  planCourses: {
    fontSize: 14,
    color: '#D1D1D1',
    marginBottom: 10,
  },
  purchaseButton: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  purchaseButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PricingPage;