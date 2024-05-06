import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VerticalCourseCard from '../../Components/VerticalCourseCard.component';
import BottomTabNavigation from '../../utils/Navigation/BottomNavigation';
import { Api } from '../../utils/Api/api';
import Spinner from 'react-native-spinkit';
import { routes } from '../../utils/Navigation/routes';
import { useRoute } from '@react-navigation/native';
const CourseCard = ({ title, category }) => {
  return (
    <View style={styles.courseCard}>
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.courseCategory}>{category}</Text>
    </View>
  );
};

const CourseExplorerScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchRef = useRef();
  const {params} = useRoute();
  const focus = params?.focus;

  useEffect(() => {
    searchRef?.current?.focus();
  },[])

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(false);
  const _getCourseDetails = async() => {
    try {
      setLoading(true);
      const api = new Api();
      const apiCall = await api.post(`/courses/search`,{
        search:searchQuery
      },false);
      setCourses(apiCall?.data?.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }   
    catch(e) {
      setLoading(false);
      alert(JSON.stringify(e));
    }
  }
  useEffect(() => {
    _getCourseDetails()
  },[searchQuery])

  
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          ref={searchRef}
          style={styles.input}
          placeholder="Search for courses"
          placeholderTextColor="#D1D1D1"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {
          loading ? 
          <Spinner
          type='ThreeBounce'
          color='white'
          size={20}
          style={{marginRight:12}}
          />

          :
          <TouchableOpacity style={styles.searchButton}>
       
          <AntDesign
          name='search1'
          color='white'
          size={20}
          />
         
        </TouchableOpacity>
        }
       
      </View>
      <View style={styles.categories}>
        {/* <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(item.name)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item.name && styles.selectedCategoryText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        /> */}
      </View>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
           <VerticalCourseCard
           onPress={() => {
            navigation.navigate(routes.courseDetail,{
              course:item
            })
           }}
           imageSource={item.thumbnail}
            hours={"5"}
            title={item.courseTitle}
            author={item?.author[0]?.author_name}
           />
        )}
      />
      <BottomTabNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:SecondaryColor,
    width:'100%',
    height:60
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
    marginLeft: 5,
    width:55,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categories: {
    marginBottom: 20,
  },
  categoryItem: {
    paddingHorizontal: 25,
    paddingVertical: 13,
    backgroundColor: SecondaryColor,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: '#000000',
  },
  categoryText: {
    color: 'white',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseCategory: {
    color: '#888888',
  },
});

export default CourseExplorerScreen;