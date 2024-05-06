import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SecondaryColor, primaryColor } from '../styles/Colors';
import moment from 'moment';

const MyCourseCard = ({ thumbnail, title, author, hours,onPress, progress,courseDetails ,item}) => {
  return (
    <Pressable
    onPress={onPress}
    style={styles.courseCard}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.courseInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.author}>Enrolled {moment(item?.enrolled_on).fromNow()}</Text>
        <Text style={styles.hours}>{`25 hours`}</Text>
        {/* <View style={styles.progressBar}>
          <View
            style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
          />
        </View> */}
        {/* <Text style={styles.progressText}>{`${(progress * 100).toFixed(0)}% Completed`}</Text> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    flexDirection: 'row',
    backgroundColor:SecondaryColor,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
   height:120,
   width:'95%',
   alignSelf:'center',
   marginVertical:10
  },
  thumbnail: {
    width: 120,
    height: 100,
    borderRadius: 5,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'white'
  },
  author: {
    color: '#888888',
    marginBottom: 5,
  },
  hours: {
    color: '#888888',
    marginBottom: 5,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#dcdcdc',
    marginBottom: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  progressText: {
    color: '#888888',
  },
});

export default MyCourseCard;