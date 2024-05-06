import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { routes } from '../../utils/Navigation/routes';

const BANNER_IMAGE = "https://i.ibb.co/bF86Shn/hero-image-d0cf6c345761451268c3cc4ffc781f40.jpg";

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
            backgroundColor: "#222222",
            width:"100%",
            height:"100%",
      }}>

        <StatusBar backgroundColor={"#8e56fc"} translucent />
         
        {/* Header */}
        <View style={{
            width:"100%",
            marginTop:20,
            justifyContent:"center",
            alignItems: 'center',
            marginTop: 40,
        }}>
          {/* Text */}
            <Text style={{
                fontSize:28,
                fontWeight:"300",
                color:"#ffffff",
            }}>Select Your Country</Text>

            {/* Button */}
            <TouchableOpacity style={{
              width:"60%",
              height:30,
              backgroundColor: "#03090e",
              justifyContent:"center",
              alignItems: 'center',
              marginTop:15,
            }}>
              <Text style={{
              textTransform:"uppercase",
                color:"#ffffff",
                fontWeight:"300",
                fontSize:12,
              }}>Select your country...</Text>
            </TouchableOpacity>
        </View>


        {/* Center text */}
        {/* <View style={{
          width:"100%",
          marginTop:"30%",
          justifyContent: "center",
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize:38,
            textTransform:"uppercase",
            color:"#ffffff",
            fontWeight:"bold",
          }}>It's time to</Text>

          <Text style={{
            fontSize: 14,
            textTransform: "uppercase",
            color: "#ffffff",
          }}>shape your destiny</Text>

          <Text style={{
            fontSize: 14,
            textTransform: "uppercase",
            color: "#ffffff",
            marginTop:"12%",
          }}>learn form the world best.</Text>
        </View> */}


        {/* Image View */}
        <View style={{
          width:"100%",
          height:"30%",
          marginTop:"15%",
          // backgroundColor:"red",
        }}>
          <Image source={{ uri:BANNER_IMAGE}} style={{
            width:"100%",
            height:"100%"
          }} />
        </View>

        {/* get started buttton */}
        <View style={{
          width:"90%",
          height:70,
          marginTop:"10%",
          alignSelf:"center",
          // borderTopWidth:0.3,
          // borderBottomWidth:0.3,
          // borderColor:"#4D4D4D",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <TouchableOpacity style={{
              width:"70%",
              height:42,
              backgroundColor:"#8e56fc",
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:20,
            }}
            onPress={()=> this.props.navigation.navigate(routes.login)}
            >
              <Text style={{
                textTransform: "uppercase",
                color:"#ffffff",
                fontWeight:"bold",
              }}>Get Started</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}
