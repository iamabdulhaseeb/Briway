import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you're using Expo for icons
import VerticalCourseCard from './VerticalCourseCard.component';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../utils/Navigation/routes';

const CourseListComponent = ({ title, courses, isHorizontal }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreButtonText}>See More</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="#D1D1D1" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={{
        flexDirection: isHorizontal ? 'column' : "row",
        marginTop: 15
      }}>
        {courses.map((course, index) => {
          if (isHorizontal) {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate(routes.courseDetail);
                }}
                key={index} style={styles.courseContainer}>
                <Image source={{ uri: course.thumbnail }} style={styles.courseImage} />
                <View style={styles.courseDetails}>
                  <Text style={styles.courseTitle}>{course.courseName}</Text>
                  <Text style={styles.courseHours}>{`${course.duration} hours`}</Text>
                </View>
              </Pressable>
            )
          } else {
            return (
              <VerticalCourseCard
                onPress={() => {
                  navigation.navigate(routes.courseDetail,{
                    course:course
                  });
                }}
                imageSource={course.thumbnail}
                title={course.courseTitle}
                hours={25}
                author={course?.author?.author_name}
              />
            )
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreButtonText: {
    color: '#D1D1D1',
    marginRight: 5,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  courseHours: {
    color: '#D1D1D1',
  },
});

export default CourseListComponent;