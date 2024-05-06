import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VerticalCourseCard from '../../Components/VerticalCourseCard.component';
import { useRoute } from '@react-navigation/native';
import { Api } from '../../utils/Api/api';
import Loader from '../../Components/Loader.component';
import { primaryColor } from '../../styles/Colors';
const courses = [
    {
        title: 'Productivity 101',
        hours: 10,
        imageSource: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', // Replace with actual image source
    },
    {
        title: 'Programming with Mosh',
        hours: 15,
        imageSource: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Replace with actual image source
    },
    {
        title: 'Typography Essentials',
        hours: 12,
        imageSource: 'https://images.unsplash.com/photo-1619632973808-4acf8041df42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
        title: 'Logo Design Mastery',
        hours: 20,
        imageSource: 'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80',
    },
    {
        title: 'Digital Illustration Techniques',
        hours: 18,
        imageSource: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        title: 'Introduction to Machine Learning',
        hours: 12,
        imageSource: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Deep Learning Fundamentals',
        hours: 20,
        imageSource: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
        title: 'Natural Language Processing',
        hours: 18,
        imageSource: 'https://plus.unsplash.com/premium_photo-1682407404565-23eda9b60f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
    },
    {
        title: 'Mastering the Art of Baking',
        hours: 12,
        imageSource: 'https://images.unsplash.com/flagged/photo-1561668038-2742fcef75d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        title: 'International Cuisine Workshop',
        hours: 20,
        imageSource: 'https://images.unsplash.com/photo-1627901594749-3976f7677cb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80',
      },
      {
        title: 'Healthy Smoothie Recipes',
        hours: 18,
        imageSource: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      }
    // ... more courses
];
  const categories = [
    { id: '1', name: 'Art' },
    { id: '2', name: 'Cooking' },
    { id: '3', name: 'Graphic Designing' },
    { id: '4', name: 'Artificial Intelligence' },
    { id: '5', name: 'Sports & Fitness' },
    { id: '6', name: 'Blockchain' },

    // ... add more categories
  ];

const CourseItem = ({ title, duration, thumbnail }) => {
  return (
    <View style={styles.courseItem}>
      <TouchableOpacity style={styles.playButton}>
        <Icon name="play-arrow" size={40} color="#FFFFFF" />
      </TouchableOpacity>
      <Image source={{ uri: thumbnail }} style={styles.courseThumbnail} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseDuration}>{duration}</Text>
      </View>
    </View>
  );
};

const AuthorScreen = ({ navigation }) => {
  const {params} = useRoute();
  const author_info = params?.author;
  const [author_courses,setAuthorCourses] = useState([]);
  const [loading,setLoading] = useState(false);
  const _getAuthorCourses = async() => {
    try {
      setLoading(true)
      const api = new Api();
      const apiCall = await api.get(`/courses/get-author-courses/${author_info?._id}`,true);
      setAuthorCourses(apiCall?.data?.data);
      setLoading(false);
    }
    catch(e) {
      setLoading(false);
      alert(JSON.stringify(e));
    }
  }
  useEffect(() => {
     if(author_info?._id) {
      _getAuthorCourses()
     }
  },[author_info?._id]);
  const author = {
    profile: 'https://your-website.com/images/author_profile.jpg',
    name: 'John Doe',
    bio: 'Passionate instructor with a knack for making complex topics simple and easy to understand.',
    totalCourses: 15,
    overallRating: '4.7',
    totalReviews: 400,
  };

  const coursesByCategories = [
    {
      category: 'Programming',
      courses: [
        { title: 'Mastering React Native', duration: '20 hours', thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
        { title: 'Python for Beginners', duration: '15 hours', thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
        // ... more courses
      ],
    },
    {
      category: 'Design',
      courses: [
        { title: 'UI/UX Design Fundamentals', duration: '12 hours', thumbnail: 'https://your-website.com/images/course_thumbnail_3.jpg' },
        { title: 'Adobe Illustrator Mastery', duration: '18 hours', thumbnail: 'https://your-website.com/images/course_thumbnail_4.jpg' },
        // ... more courses
      ],
    },
    // ... more categories
  ];

  return (
    <View style={styles.container}>
      <Loader
      isVisible={loading}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.authorInfo}>
        <Image source={{ uri: author_info.author_profile}} style={styles.authorProfile} />
        <Text style={styles.authorName}>{author_info.author_name}</Text>
        <Text style={styles.authorBio}>{author_info.author_bio}</Text>
        <Text style={styles.authorStats}>{`${author.totalCourses} courses | ${author.overallRating} (${author.totalReviews} reviews)`}</Text>
      </View>
      <FlatList
        data={author_courses}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
           <VerticalCourseCard
           imageSource={item.thumbnail}
            hours={20}
            title={item.courseTitle}
           />
        )}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: primaryColor, // Dark background color
  },
  backButton: {
    marginBottom: 20,
  },
  authorInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  authorProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for dark theme
    marginBottom: 5,
  },
  authorBio: {
    color: '#888888', // Text color for dark theme
    textAlign: 'center',
    marginBottom: 10,
  },
  authorStats: {
    color: '#888888', // Text color for dark theme
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for dark theme
    marginBottom: 10,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333', // Darker course item background
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
  courseThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  courseDetails: {
    flex: 1,
  },
});

export default AuthorScreen;