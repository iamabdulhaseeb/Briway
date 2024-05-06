import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class YourCoursesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "1 - The Basics",
                    detail: "Mooroo",
                    episodes:"29 eps",
                    completed:"90% completed"
                },
                {
                    id: '2',
                    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "2 - The Basics",
                    detail: "Ep:1 1hr 20min",
                    detail: "Mooroo",
                    episodes: "29 eps",
                    completed: "65% completed"
                },
                {
                    id: '3',
                    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "3 - The Basics",
                    detail: "Ep:1 1hr 20min",
                    detail: "Mooroo",
                    episodes: "29 eps",
                    completed: "50% completed"
                },
                {
                    id: '4',
                    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "4 - The Basics",
                    detail: "Ep:1 1hr 20min",
                    detail: "Mooroo",
                    episodes: "29 eps",
                    completed: "55% completed"
                },
            ],
            search: "",
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#222831",
                flex: 1,

            }}>

                <StatusBar backgroundColor={"#8e56fc"} translucent />


                {/* Back Button View/ header View */}
                <View style={{
                    width: "100%",
                    height: 62,
                    justifyContent: "center",
                    paddingLeft: "3%",
                    marginTop: 25,
                }}>
                    <TouchableOpacity
                        activeOpacity={0.5}>
                        <MaterialCommunityIcons name={"keyboard-backspace"} size={40} color={"#ffffff"} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{
                    // bottom:10
                }}>

                    {/* Main View */}
                    <View style={{
                        width: "100%",
                        paddingBottom: 30
                    }}>

                        {/* mmainText */}
                        <View style={{
                            width: "100%",
                            paddingLeft: "9%",
                            marginBottom: 7,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: "#8e56fc",
                                fontWeight: "bold",
                            }}>Your Courses</Text>
                        </View>

                        {/* Search bar view */}
                        <View style={{
                            width: "100%",
                            height: 70,
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <TextInput
                                value={this.state.search}
                                onChangeText={(value) => this.setState({ search: value })}
                                placeholder="Search Courses"
                                placeholderTextColor={"#969696"}
                                style={{
                                    width: "84%",
                                    height: 40,
                                    backgroundColor: "#ffffff",
                                    paddingLeft: 25,
                                    fontSize: 15,
                                    borderRadius: 50,
                                    color: "#000000"
                                }}
                            />
                            {/* Search Button */}
                            <TouchableOpacity style={{
                                width: 85,
                                height: 40,
                                borderRadius: 50,
                                backgroundColor: "#8e56fc",
                                position: "absolute",
                                right: 28,
                                justifyContent: "center",
                                alignItems: 'center',
                            }}
                                activeOpacity={0.8}
                            >
                                <Ionicons name={"search-sharp"} size={25} color={"#ffffff"} />
                            </TouchableOpacity>
                        </View>


                        {/* FlatList view */}
                        <View style={{
                            width: "100%",
                        }}>
                            <FlatList
                                style={{
                                    marginTop: 15,
                                    marginLeft:12,
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
                                        onPress={() => this.props.navigation.navigate("BuyCourseScreen")}
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
                                            width: "80%",
                                            height: "90%",
                                            marginLeft: 15,
                                        }}>
                                            <Text style={{
                                                color: "#ffffff",
                                                fontWeight: "bold",
                                                fontSize: 14,
                                                width: "70%",
                                            }} numberOfLines={2}>{item.name}</Text>

                                            <View style={{
                                                flexDirection:"row",
                                                justifyContent:"space-evenly",
                                            }}>
                                            <Text style={{
                                                color: "#8B8A8A",
                                                marginTop: 10,
                                                width: "30%",
                                            }} numberOfLines={1}>{item.detail}</Text>

                                            <Text style={{
                                                    color: "#8B8A8A",
                                                    marginTop: 10,
                                                    width: "20%",
                                            }} numberOfLines={1}>{item.episodes}</Text>

                                            <Text style={{
                                                    color: "#8e56fc",
                                                    marginTop: 10,
                                                    width: "47%",
                                            }}numberOfLines={1}>{item.completed}</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                )
                                } />
                        </View>


                    </View>

                </ScrollView>
            </View>
        );
    }
}
