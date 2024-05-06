import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
// import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'


const instructor_Img = "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

export default class BuyCourseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [
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
                width: "100%",
                height: "100%",
            }}>

                <StatusBar backgroundColor={"#8e56fc"} translucent />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={false}
                >

                    {/* Video view */}
                    <View style={{
                        width: "100%",
                        height: 270,
                        backgroundColor: "#8e56fc",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 14,
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

                    {/* Buying price */}
                    <View style={{
                        width: "90%",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: 'center',
                        marginTop: 15,
                    }}>
                        <Text style={{
                            color: "#FFFFFF",
                            fontSize: 16,
                        }}>Cooking Basics</Text>

                        <TouchableOpacity>
                            <Text style={{
                                color: "#8e56fc",
                                fontSize: 17,
                                fontWeight: "bold",
                            }}>$144.52</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Buy button */}
                    <View style={{
                        width:"100%",
                        marginTop:20,
                        justifyContent:"center",
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={{
                            width:"80%",
                            height:40,
                            backgroundColor:"#8e56fc",
                            justifyContent: "center",
                            alignItems: 'center',
                            borderRadius:5,
                        }}>
                            <Text style={{
                                textTransform:"uppercase",
                                color:"#ffffff",
                                fontSize:20,
                                fontWeight:"bold",
                            }}>buy now</Text>
                        </TouchableOpacity>
                    </View>


                    {/* instructors text view */}
                    <View style={{
                        width: "90%",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: "#FFFFFF",
                            fontSize: 18,
                        }}>Instructor</Text>
                    </View>


                    {/* top instructors View */}
                    <View style={{
                        width: "100%",
                    }}>
                                <TouchableOpacity style={{
                                    width: "90%",
                                    height: 140,
                                    borderRadius: 5,
                                    margin: 10,
                                    overflow: "hidden",
                                    alignSelf: "center",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                                    activeOpacity={0.6}
                                >
                                    <View style={{
                                        width: "40%",
                                        height: "90%",
                                        borderRadius: 100,
                                        overflow: 'hidden',
                                    }}>
                                        <Image source={{ uri: instructor_Img }} style={{
                                            width: "100%",
                                            height: "100%",
                                            reziseMode: "cover"
                                        }} />
                                    </View>

                                    <View style={{
                                        width: "55%",
                                        height: "90%",
                                        marginLeft: 5,
                                    }}>

                                        <View style={{
                                            width: "100%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                color: "#ffffff",
                                                fontWeight: "bold",
                                                fontSize: 14,
                                                width: "70%",
                                            }} numberOfLines={2}>Jacob</Text>

                                            <View style={{
                                                flexDirection: "row",
                                                marginRight: 10,
                                            }}>
                                                <Entypo name={"star"} size={15} color={"#8e56fc"} />
                                                <Text style={{
                                                    color: "#8D8D8D",
                                                    fontSize: 12,
                                                }}>(4.9)</Text>
                                            </View>
                                        </View>

                                        <Text style={{
                                            color: "#8B8A8A",
                                        }} numberOfLines={1}>(cources)</Text>

                                        <Text style={{
                                            color: "#8B8A8A",
                                            marginTop: 10,
                                            width: "90%"
                                }} numberOfLines={5}>t is a long established fact that a readerwill be distracted by the readable</Text>
                                    </View>
                                </TouchableOpacity>
                    </View>


                    {/* Text */}
                    <Text style={{
                        color: "#8e56fc",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginLeft: 20,
                        marginTop: 15,
                    }}>Episodes of Course</Text>


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
                            data={this.state.episodes}
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
