import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { SecondaryColor, primaryColor } from '../styles/Colors';

const AuthorCard = ({ name, coursesCount, profilePic }) => {
  return (
    <View style={styles.authorCard}>
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
      <Text style={styles.authorName}>{name}</Text>
      <Text style={styles.coursesCount}>{`${coursesCount} courses`}</Text>
    </View>
  );
};

const AuthorsListing = () => {
  const authors = [
    {
      name: 'John Doe',
      coursesCount: 15,
      profilePic:
        'https://randomuser.me/api/portraits/men/1.jpg', // Replace with actual profile pic URL
    },
    {
      name: 'Jane Smith',
      coursesCount: 8,
      profilePic:
        'https://randomuser.me/api/portraits/women/2.jpg', // Replace with actual profile pic URL
    },
    {
        name: 'Jane Smith',
        coursesCount: 8,
        profilePic:
          'https://randomuser.me/api/portraits/women/2.jpg', // Replace with actual profile pic URL
      },
    // ... more authors
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Authors</Text>
      <FlatList
        data={authors}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item }) => (
          <AuthorCard
            name={item.name}
            coursesCount={item.coursesCount}
            profilePic={item.profilePic}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: SecondaryColor,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  authorCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: primaryColor,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  coursesCount: {
    color: '#888888',
  },
});

export default AuthorsListing;