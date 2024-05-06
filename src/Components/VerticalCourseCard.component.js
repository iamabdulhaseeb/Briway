import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import { SecondaryColor } from '../styles/Colors';

const VerticalCourseCard = ({ imageSource, title, hours, author,onPress }) => {
  console.log(author);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri:imageSource}} style={styles.courseImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseHours}>{`${hours} hours`}</Text>
        {
          author && <Text style={styles.author}>{`By ${author}`}</Text>
        }
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: SecondaryColor,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    width:Dimensions.get('screen').width / 2.4,
    marginHorizontal:5,
  },
  courseImage: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  courseHours: {
    color: '#D1D1D1',
    marginBottom: 5,
  },
  author: {
    color: 'white',
  
  },
});

export default VerticalCourseCard;