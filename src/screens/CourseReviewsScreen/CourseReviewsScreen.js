import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Api } from '../../utils/Api/api';
import { useRoute } from '@react-navigation/native';
import { routes } from '../../utils/Navigation/routes';
import { getUser } from '../../utils/Services/Authservice';

const ReviewItem = ({ username, rating, review,isMine }) => {
  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Text style={styles.username}>{isMine ? "YOU" : username}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={20} color="#FFA500" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{review}</Text>
    </View>
  );
};

const ReviewsRatingsScreen = ({ navigation }) => {
  const [reviews,setReviews] = useState([]);
  const {params} = useRoute();
  const course = params?.course;
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState(null);

  const _setupUserInfo = async() => {
    const usr = await getUser();
    setUser(usr);
  }
  const _getCourseReviews = async() => {
    try {
      setLoading(true);
      const api = new Api();
      const apiCall = await api.get(`/courses/get-course-reviews/${course?._id}`,true);
      setReviews(apiCall?.data?.data);
      setLoading(false);
    }
    catch(e) {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    _setupUserInfo();
    _getCourseReviews();
  },[]);
 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{course?.courseTitle}</Text>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate(routes.AuthorDetail,{
          author:course?.author
        })
      }}
      >
      <Text style={styles.details}>
        {`${course.author?.author_name} | 20 hrs`}
      </Text>
      </TouchableOpacity>
      <FlatList
        data={reviews}
        contentContainerStyle={{marginTop:20}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ReviewItem isMine={item?.user?._id == user?._id} username={item.user?.fullname} rating={item.rating} review={item.feedback} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background color
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for dark theme
    marginBottom: 5,
  },
  details: {
    color: '#888888', // Text color for dark theme
    marginBottom: 20,
    marginTop:5
  },
  reviewItem: {
    backgroundColor: '#333333', // Darker review item background
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for dark theme
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    color: '#FFA500', // Orange color for ratings
  },
  reviewText: {
    color: '#FFFFFF', // Text color for dark theme
  },
});

export default ReviewsRatingsScreen;