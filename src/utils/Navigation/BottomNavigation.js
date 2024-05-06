import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you're using Expo for icons
import { primaryColor } from '../../styles/Colors';
import { routes } from './routes';
import { useNavigation } from '@react-navigation/native';

const BottomTabNavigation = ({ activeTab, onSelectTab }) => {
    const navigation = useNavigation();
  const tabs = [
    { title: 'Home',navigate:routes.home, icon: 'ios-home' },
    { title: 'Explore',navigate:routes.courseExplorer, icon: 'ios-search' },
    { title: 'My Courses',navigate:routes.myCourses, icon: 'ios-book' },
    { title: 'Profile',navigate:routes.profile, icon: 'ios-person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            activeTab === index && styles.activeTab,
          ]}
          onPress={() => {
                navigation.navigate(tab.navigate)
          }}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeTab === index ? '#FFFFFF' : '#D1D1D1'}
          />
          <Text style={styles.tabTitle}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#1A1A1A",
    borderTopWidth: 1,
    borderTopColor: "#1A1A1A",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
height:65
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#1F4068',
  },
  tabTitle: {
    color: '#D1D1D1',
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomTabNavigation;