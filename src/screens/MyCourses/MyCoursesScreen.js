import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import BottomTabNavigation from '../../utils/Navigation/BottomNavigation';
import MyCourseCard from '../../Components/MyCourseCard.component';
import { Api } from '../../utils/Api/api';
import { routes } from '../../utils/Navigation/routes';

const CourseCard = ({ title, hours, imageSource }) => {
  return (
    <View style={styles.courseCard}>
      <Image source={{ uri: imageSource }} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.courseHours}>{`${hours} hours`}</Text>
    </View>
  );
};

const CourseTypeTab = ({title,isSelected,onSelect}) => {
  return (
    <TouchableOpacity
    onPress={onSelect}
    style={{
      width:Dimensions.get('screen').width / 3,
      height:50,
      borderBottomWidth:isSelected ? 2 : 1,
      borderBottomColor:isSelected ? 'white' : "transparent",
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        color:'white',
        fontWeight:isSelected ? 'bold' : "normal"
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

const CourseTypes = {
  completed:"completed",
  ongoing:"ongoing",
  watchlater:"watchlater"
}
const MyCoursesScreen = (props) => {
  const [selectedTab,setSelectedTab] = useState(CourseTypes.ongoing);
  const isOngoing = selectedTab == CourseTypes.ongoing;
  const iscompleted = selectedTab == CourseTypes.completed;
  const iswatchLater = selectedTab == CourseTypes.watchlater;

  const [mycourses,setMyCourses] = useState([]);

  const _getMyCourses = async() => {
    try {
      const api = new Api();
      const apiCall = await api.get('/courses/get-my-courses',true);
      setMyCourses(apiCall?.data?.data)
    } 
    catch(e) {
      alert(JSON.stringify(e));
    }
  }

  useEffect(() => {
    _getMyCourses()
  },[])

  const ongoingCourses = [
    {
      title: 'Productivity 101',
      hours: 10,
      thumbnail: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', // Replace with actual image source
  },
  {
      title: 'Programming with Mosh',
      hours: 15,
      thumbnail: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Replace with actual image source
  },
    // ... more ongoing courses
  ];

  const completedCourses = [
    {
      title: 'Course 2 (Completed)',
      hours: 15,
      thumbnail: 'https://your-website.com/images/course2.jpg',
    },
    // ... more completed courses
  ];

  return (
    <View style={styles.container}>
        <View style={{
        position:'absolute',
        bottom:0,
        width:'100%'
      }}>
      <BottomTabNavigation/>
      </View>
      <View style={{
        width:'100%',
        height:130,
        backgroundColor:SecondaryColor
      }}>
       
       <View  style={{
        width:'90%',
        alignSelf:'center',
        marginTop:20
       }}>
       <Text style={{
          color:"white",
          fontSize:20,
          fontWeight:'bold'
        }}>My Courses</Text>
        <Text style={{
          fontSize:11,
          fontWeight:'300',
          color:'grey'
        }}>You can find the enrolled courses here</Text>

       </View>
       <View style={{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:0
       }}>
        <CourseTypeTab
        title={'On Going'}
        isSelected={isOngoing}
        onSelect={() => setSelectedTab(CourseTypes.ongoing)}
        />
         
        <CourseTypeTab
        title={'Watchlater'}
        isSelected={iswatchLater}
        onSelect={() => setSelectedTab(CourseTypes.watchlater)}


        />
         <CourseTypeTab
        title={'Completed'}
        isSelected={iscompleted}
        onSelect={() => setSelectedTab(CourseTypes.completed)}


        />
      
       </View>
      </View>

      <FlatList
        data={mycourses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MyCourseCard 
          onPress={() => {
            props.navigation.navigate(routes.courseDetail,{
              course:item.course
            })
          }}
          item={item} progress={0.5} title={item?.course?.courseTitle} hours={item.hours} author={item?.author?.author_name} thumbnail={item.course?.thumbnail} />
        )}
      />
     
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor, // Dark background color
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', // Text color for dark theme
  },
  courseCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#333333', // Darker card background
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for dark theme
  },
  courseHours: {
    color: '#888888',
    color: '#B2B2B2', // Text color for dark theme
  },
});

export default MyCoursesScreen;