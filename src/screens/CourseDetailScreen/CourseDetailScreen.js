import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ImageBackground, Alert, ScrollView, Pressable } from 'react-native';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { routes } from '../../utils/Navigation/routes';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Api } from '../../utils/Api/api';
import Loader from '../../Components/Loader.component';

const VideoItem = ({ title, duration, thumbnail, onPress,finished }) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.videoItem}>
      <Image
        source={{ uri: thumbnail }}
        style={styles.videoThumbnail}
      />
      <Text style={styles.videoTitle}>{title}</Text>
      <View>
        {
          finished ? 
          <Ionicons
          name='checkmark-circle-sharp'
          size={30}
          style={{
            marginLeft:6
          }}
          color='#0bda51'
          />
          :
          null
        }
      <Text style={styles.videoDuration}>{duration} mins</Text>
      </View>
    </Pressable>
  );
};

const CourseDetailScreen = (props) => {
  const { params } = useRoute();
  const [courseDetails, setcourseDetails] = useState(params?.course);
  const [loading, setLoading] = useState(false);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);
  const [myCourseInfo,setMyCourseInfo] = useState(null);
  const isFocused = useIsFocused();

  const _getCourseDetails = async () => {
    try {
      setLoading(true);
      const api = new Api();
      const apiCall = await api.get(`/courses/course-details/${courseDetails?._id}`, true);
      setTotalStudents(apiCall?.data?.data[0]?.enrollmentCount);
      setIsAlreadyEnrolled(apiCall?.data?.is_enrolled)
      setcourseDetails(apiCall?.data?.data[0])
      setLoading(false);
    }
    catch (e) {
      setLoading(false);
      alert(JSON.stringify(e));
    }
  }
  const _getMyCourseInfo = async() => {
    try {
    
      setLoading(true);
      const api = new Api();
      const apiCall = await api.get(`/courses/get-my-course/${courseDetails?._id}`,true);
      setMyCourseInfo(apiCall?.data?.data);
      setLoading(false);  
    }
    catch (e) {
      console.log(e)
      setLoading(false);
      alert(JSON.stringify(e?.response?.data?.message));
    }
  }
  useEffect(() => {
    if(isAlreadyEnrolled) {
      _getMyCourseInfo();
    }
  },[isAlreadyEnrolled,isFocused])
  const _enrollInCourse = async () => {
    try {
      if (isAlreadyEnrolled) {
        alert("You are already enrolled in this course");
        return;
      }
      setLoading(true);
      const api = new Api();
      const apiCall = await api.post(`/courses/enroll-in-course`, {
        courseId: courseDetails?._id
      }, true);
      await _getCourseDetails();
      setLoading(false);
    }
    catch (e) {
      setLoading(false);
      alert(JSON.stringify(e?.response?.data?.message));
    }
  }
  useEffect(() => {
    if (params?.course?._id) {
      _getCourseDetails()
    }
  }, [isFocused])
  const course = {
    thumbnail: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'Productivity',
    name: 'Productivity 101',
    hours: '20',
    author: 'John Doe',
    ratings: '4.8',
    reviews: '325',
    content: [
      { title: 'Introduction to React Native', duration: '30 mins', thumbnail: 'https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80' },
      { title: 'Setting Up Development Environment', duration: '45 mins', thumbnail: 'https://images.unsplash.com/photo-1542123491-63f422a5f45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
      { title: 'Building UI Components', duration: '1 hour', thumbnail: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
      // ... more video content
    ],
  };

  return (
    <View style={styles.container}>
      <Loader
        isVisible={loading}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={{ uri: courseDetails.thumbnail }} style={styles.thumbnail} >
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack()
            }}
            style={styles.backButton}>
            {/* Play button icon */}
            <Ionicons
              name='chevron-back'
              color='white'
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(routes.videoPlayer, {
                thumbnail:courseDetails?.thumbnail,
                videoUrl:courseDetails?.introVideo,
                title:courseDetails?.courseTitle,
                course:course
              })
            }}
            style={styles.playButton}>
            {/* Play button icon */}
            <Entypo
              name='controller-play'
              color='white'
              size={30}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.courseDetails}>
          <Text style={styles.category}>{courseDetails?.category?.name}</Text>
          <Text style={styles.courseName}>{courseDetails?.courseTitle}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.detailsText}>
              {`20 hours |`}
            </Text>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate(routes.AuthorDetail,{
                author:courseDetails?.author
              })
            }}>
              <Text style={styles.detailsText}>{courseDetails.author?.author_name} | </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate(routes.reviewsRatings,{
                course:courseDetails
              })
            }}>
              <Text style={styles.detailsText}>{params?.course?.averageRating} ({params?.course?.reviews?.length}) reviews</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginVertical: 10
          }}>
            <Ionicons
              name='school'
              color='white'
              size={22}
            />
            <Text style={{ color: 'white', fontSize: 14,paddingLeft:10}}>{totalStudents} students</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          {
            isAlreadyEnrolled ?
              <View style={{
                paddingHorizontal: 30,
                alignSelf: 'flex-start',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#C8F7D8",
                borderRadius: 20
              }}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Enrolled</Text>
              </View>
              :
              null
          }
           {
            isAlreadyEnrolled && myCourseInfo?.finished_videos?.length == courseDetails?.content?.length ?
              <View style={{
                paddingHorizontal: 30,
                alignSelf: 'flex-start',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#FFB366",
                borderRadius: 20,
                marginLeft:5
              }}>
                <Text style={{ color: 'white', fontWeight: '900' }}>Finished</Text>
              </View>
              :
              null
          }
          </View>
        </View>
       
        <FlatList
          data={courseDetails.content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <VideoItem
              finished={myCourseInfo?.finished_videos?.includes(item?._id)}
              onPress={() => {
                if (isAlreadyEnrolled) {
                  props.navigation.navigate(routes.videoPlayer, {
                    thumbnail:item?.thumbnail,
                    videoUrl:item?.videoUrl,
                    title:item?.title,
                    course:course,
                    myCourseId:myCourseInfo?._id,
                    contentId:item?._id
                  })
                } else {
                  alert("You are not enrolled in this course")
                }
              }}
              thumbnail={item.thumbnail} title={item.title} duration={item.duration} />
          )}
        />
   
      </ScrollView>
      {
        loading || isAlreadyEnrolled ? null
          :
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Enroll Course", "Do you want to enroll in this course", [{ text: "No" }, { text: "Yes", onPress: _enrollInCourse }])
            }}
            style={styles.enrollButton}>
            <Text style={styles.enrollButtonText}>{isAlreadyEnrolled ? 'Share' : 'Enroll Now'}</Text>
          </TouchableOpacity>
      }
     
      {
        isAlreadyEnrolled && !myCourseInfo?.feedback && myCourseInfo?.finished_videos?.length == courseDetails?.content?.length ?
        <TouchableOpacity
        onPress={() => {
        props.navigation.navigate(routes.feedbackscreen,{
          course:courseDetails
        })
        }}
        style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>{'Rate Course'}</Text>
      </TouchableOpacity>
      :
      null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    backgroundColor: SecondaryColor,
    borderRadius: 30,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: "center",
    alignItems: 'center'
  },
  playButton: {
    position: 'absolute',
    bottom: -25,
    right: 30,
    backgroundColor: SecondaryColor,
    borderRadius: 30,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: "center",
    alignItems: 'center'
  },
  courseDetails: {
    padding: 20,
  },
  category: {
    color: '#888888',
    marginBottom: 5,
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  detailsText: {
    color: '#888888',
    marginBottom: 10,
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  videoThumbnail: {
    width: 80,
    height: 60,
    marginRight: 15,
    borderRadius: 10
  },
  videoTitle: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  videoDuration: {
    color: '#888888',
    color: 'white',
  },
  enrollButton: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 20,
  },
  enrollButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;