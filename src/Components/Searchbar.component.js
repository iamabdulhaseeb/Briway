import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primaryColor } from '../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../utils/Navigation/routes';
const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(routes.courseExplorer,{focus:true})}
        style={styles.input}
        placeholder="Search for courses"
        placeholderTextColor="#D1D1D1"
        // value={searchQuery}
        // onChangeText={setSearchQuery}
      >
        <Text style={{color:"#D1D1D1",fontSize:16}}>Search for courses</Text>
        </Pressable>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="ios-search" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width:'90%',
    alignSelf:'center',
    marginVertical:20
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 8,
  },
});

export default CustomSearchBar;