import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class BrowseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    name:"LeaderShip",
                    color: "#ff9300",
                },
                {
                    id: '2',
                    name: "Career",
                    color: "#8e05c2",
                },
                {
                    id: '3',
                    name: "Music",
                    color: "#8e0505",
                },
                {
                    id: '4',
                    name: "Mind",
                    color: "#c37b89",
                },
                {
                    id: '5',
                    name: "Body",
                    color: "#113cfc",
                },
                {
                    id: '6',
                    name: "Entrepreneurship",
                    color: "#39a388",
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
                    marginTop:25,
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
                        width:"100%",
                        paddingBottom:30
                    }}>

                        {/* mmainText */}
                        <View style={{
                            width: "100%",
                            paddingLeft: "4%",
                            marginBottom: 7,
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#8e56fc",
                                fontWeight: "bold",
                            }}>Search New{"\n"}Courses.</Text>
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
                                placeholder="Search new content"
                                placeholderTextColor={"#969696"}
                                style={{
                                    width: "84%",
                                    height: 45,
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
                                height: 45,
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


                        {/* Categories View */}
                        <View style={{
                            width: "100%",
                            // height: 20,
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                nestedScrollEnabled={false}
                                data={this.state.data}
                                keyExtractor={item => item.id}

                                renderItem={({ item, index }) => (

                                    <TouchableOpacity style={{
                                        width:160,
                                        height:140,
                                        backgroundColor:item.color,
                                        justifyContent:"flex-end",
                                        alignItems:"flex-end",
                                        borderRadius:10,
                                        margin:5
                                    }}
                                    activeOpacity={0.8}
                                        onPress={() => this.props.navigation.navigate("YourCoursesScreen")}
                                    >
                                        <Text style={{
                                            margin:10,
                                            fontSize:16,
                                            color:"#ffffff",
                                            fontWeight:"bold",
                                        }}
                                        numberOfLines={2}
                                        >{item.name}</Text>
                                    </TouchableOpacity>
                                )
                                } />
                        </View>

                        {/* Links view */}
                        <View style={{
                            width:"100%",
                            justifyContent:"center",
                            paddingLeft:"10%",
                            marginTop:15,
                        }}>
                            <Text style={{
                                fontSize:15,
                                color:"#ffffff"
                            }}>Relationships</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "#ffffff"
                            }}>Yoga | Meditation</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "#ffffff"
                            }}>Business</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "#ffffff"
                            }}>Business</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "#ffffff"
                            }}>Life coaching | Wellness</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "#ffffff"
                            }}>Gaming</Text>
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }
}
