import React, { Component, useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import BottomTabNavigation from '../../utils/Navigation/BottomNavigation';
import { SearchBar } from 'react-native-screens';
import CustomSearchBar from '../../Components/Searchbar.component';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import CourseListComponent from '../../Components/CoursesListing.component';
import AuthorsListing from '../../Components/AuthorsListing.component';
import { aiCourses, cookingCourses, courses, graphicDesigningCourses, sportsCourses } from '../../utils/dummydata';
import { Api } from '../../utils/Api/api';
import Loader from '../../Components/Loader.component';




export default HomeScreen = props => {
    const [courses,setCourses] = useState([]);
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(false);

    const _getAllCourses = async() => {
        try {
            setLoading(true);
            const api = new Api();
            const apiCall = await api.get('/courses/home-content',false);
            setCourses(apiCall.data.courses);
            setCategories(apiCall.data.categories);
            setLoading(false);
        }
        catch(e) {
            setLoading(false)
            alert(JSON.stringify(e))
        }
    }
    useEffect(() => {
        _getAllCourses()
    },[])
    return (
        <View style={{
            backgroundColor: primaryColor,
            flex: 1,

        }}>
            <Loader
            isVisible={loading}
            />
            <StatusBar backgroundColor={"#8e56fc"} translucent />


            {/* Back Button View/ header View */}
            <View style={{
                width: "100%",
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                {/* <TouchableOpacity
                    activeOpacity={0.5}>
                    <MaterialCommunityIcons name={"menu"} size={30} color={"#ffffff"} />
                </TouchableOpacity> */}
                <Image
                    source={require('../../../logo.png')}
                    style={{
                        height: 50,
                        width: 100
                    }}
                />
                <Image
                    source={{ uri: 'https://theithacan.org/wp-content/uploads/2022/02/2.8-Cartoon_MikeRoss-3-1024x577.jpg' }}
                    style={{
                        height: 35,
                        width: 35,
                        borderRadius: 35 / 2
                    }}
                />

            </View>



            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingLeft: 20,
                    width: '80%',
                    marginTop: 30
                }}>What would you like to learn today?</Text>
                <CustomSearchBar />
                {/* Main View */}
                <View style={{
                    width: "100%",
                    paddingBottom: 30,
                }}>

                    {/* Top courses text view */}



                    {/* cooking basics View */}


                    {
                        categories?.map(categ => (
                            <CourseListComponent
                            title={categ?.name}
                            courses={courses?.filter(course => course?.categoryId == categ?._id)}
                            isHorizontal={false}
                        />
                        ))
                    }

                    {/* <CourseListComponent
                        title={'Popular Courses'}
                        courses={courses}
                        isHorizontal={false}
                    />

                    <CourseListComponent
                        title={'Graphic Designing'}
                        courses={graphicDesigningCourses}
                        isHorizontal={false}
                    />
                    <CourseListComponent
                        title={'Recommended Courses'}
                        courses={courses}
                        isHorizontal={true}
                    />
                    <CourseListComponent
                        title={'Artificial Intelligence'}
                        courses={aiCourses}
                        isHorizontal={false}
                    />

                    <AuthorsListing/>
                    <CourseListComponent
                        title={'Cooking Courses'}
                        courses={cookingCourses}
                        isHorizontal={false}
                    />
                    <CourseListComponent
                        title={'Artificial Intelligence'}
                        courses={aiCourses}
                        isHorizontal={false}
                    />
<CourseListComponent
                        title={'Sports & Fitness'}
                        courses={sportsCourses}
                        isHorizontal={false}
                    /> */}

                    {/* find podcast text view */}
                

                    <View style={{
                        width:'90%',
                        minHeight:100,
                        backgroundColor:SecondaryColor,
                        alignSelf:'center',
                        borderRadius:12,
                        padding:12
                    }}>
                        <Text style={{color:'white',fontSize:19,fontWeight:'bold'}}>Need Assistance?</Text>
                        <Text style={{color:'white',fontSize:12,fontWeight:'300',marginVertical:5}}>Cant find the course for you need? submit a request and our team will help you find it</Text>
                        <TouchableOpacity style={{
                            paddingHorizontal:28,
                            height:35,justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:primaryColor,
                            alignSelf:'flex-start',
                            borderRadius:10,
                            marginTop:10
                        }}>
                            <Text style={{color:'white'}}>Request</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
            <BottomTabNavigation
             />
        </View>
    )
}







