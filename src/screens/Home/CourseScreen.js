import React, { Component } from 'react';
import { View, Text, StatusBar,TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
// import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'


export default class CourseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {
                id: '1',
                image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "1 - The Basics",
                detail: "Ep:1 1hr 20min",
            },
            {
                id: '2',
                image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "2 - The Basics",
                detail: "Ep:1 1hr 20min",
            },
            {
                id: '3',
                image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "3 - The Basics",
                detail: "Ep:1 1hr 20min",
            },
            {
                id: '4',
                image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "4 - The Basics",
                detail: "Ep:1 1hr 20min",
            },
        ],
    };
  }

  render() {
    return (
        <View style={{
            backgroundColor: "#222831",
            width:"100%",
            height:"100%",
        }}>

        <StatusBar backgroundColor={"#8e56fc"} translucent />

        <ScrollView 
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={false}
        >

            {/* Video view */}
            <View style={{
                width:"100%",
                height:270,
                backgroundColor:"#8e56fc",
                justifyContent:"center",
                alignItems: 'center',
            }}>
                    <Text style={{
                        color:"#fff",
                        fontSize:14,
                    }}>Video Here</Text>
                    {/* <Video
                        source={{ uri:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1"}}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        muted={true}
                        repeat={true}
                        resizeMode={"cover"}
                        rate={0.7}
                        ignoreSilentSwitch={"obey"}
                    /> */}
            </View>    


            {/* Text */}
                <Text style={{
                    color:"#8e56fc",
                    fontSize:25,
                    fontWeight:"bold",
                    marginLeft:20,
                    marginTop:15,
                }}>Next episodes of{"\n"}this course</Text>


            {/* FlatList view */}
                <View style={{
                    width: "100%",
                }}>
                    <FlatList
                        style={{
                            marginTop: 15,
                        }}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        nestedScrollEnabled={false}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity style={{
                                width: "90%",
                                height: 60,
                                borderRadius: 5,
                                margin: 10,
                                overflow: "hidden",
                                alignSelf: "center",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                                activeOpacity={0.6}
                                onPress={() => this.props.navigation.navigate("BrowseScreen")}
                                >
                                <View style={{
                                    width: "20%",
                                    height: "100%",
                                }}>
                                    <Image source={{ uri: item.image }} style={{
                                        width: "100%",
                                        height: "100%",
                                        reziseMode: "cover"
                                    }} />
                                </View>

                                <View style={{
                                    width: "55%",
                                    height: "90%",
                                    marginLeft: 15,
                                }}>
                                        <Text style={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            fontSize: 14,
                                            width: "70%",
                                        }} numberOfLines={2}>{item.name}</Text>

                                    <Text style={{
                                        color: "#8B8A8A",
                                        marginTop: 10,
                                        width: "90%"
                                    }} numberOfLines={5}>{item.detail}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        } />
                </View>

        </ScrollView>
      </View>
    );
  }
}
