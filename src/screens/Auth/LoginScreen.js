import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, StatusBar, ScrollView } from 'react-native';
import { routes } from '../../utils/Navigation/routes';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import { Api, base_url } from '../../utils/Api/api';
import axios from 'axios';
import Loader from '../../Components/Loader.component';
import { saveUser } from '../../utils/Services/Authservice';

const BG_IMAGE = "https://i.ibb.co/p0Jq7xC/abstract-background-53876-90698.jpg";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const _login = async() => {
    try 
    {
        setLoading(true);
      const api = new Api();
     const apicall = await api.post('/users/login',{email:email,password:password},false);
     await saveUser(apicall.data.user,apicall.data.token);
    navigation.replace(routes.home);
     setLoading(false);

      alert(JSON.stringify(apicall.data));
    }
    catch(e) {
        setLoading(false);
        console.log(e)
        alert(JSON.stringify(e));
    }
  }

  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: primaryColor,
    }}>
      <StatusBar backgroundColor={"#8e56fc"} translucent />

      {/* Bg Image */}
      <Image source={{ uri: BG_IMAGE }} style={{
        width: "100%",
        height: "40%",
      
      }} />

      <Loader
      isVisible={loading}
      />

      {/* Text View */}
      <View style={{
        width: "80%",
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: "5%",
        borderRadius: 5,
        position: "absolute",
        top: "20%",
        padding: 12,
      }}>
        <Text style={{
          fontSize: 25,
          color: "#ffffff",
        }}>Become learner, Create creative.</Text>
      </View>

      {/* Login View */}
      <View style={{
        width: "100%",
        height: "47%",
        backgroundColor: primaryColor,
      }}>
        <Text style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          marginLeft: "10%",
          marginTop: "12%",
        }}>Login</Text>

        {/* Text Input View */}
        <View style={{
          width: "100%",
          justifyContent: "center",
          alignItems: 'center',
          marginTop: "5%",
        }}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={"#969696"}
            style={{
              width: "84%",
              height: 45,
              paddingLeft: 25,
              fontSize: 15,
              borderRadius: 50,
              color: "#000000",
              borderWidth: 1,
              borderColor: "#5A5A5A",
              color:'white'

            }}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={"#969696"}
            secureTextEntry={true}
            style={{
              width: "84%",
              height: 45,
              paddingLeft: 25,
              fontSize: 15,
              borderRadius: 50,
              color: "#000000",
              borderWidth: 1,
              borderColor: "#5A5A5A",
              marginTop: 10,
              color:'white'
            }}
          />
        </View>

        <TouchableOpacity style={{
          alignSelf: "flex-end",
          marginRight: '10%',
          marginTop: 5,
        }}>
          <Text style={{
            color: "#b2abb4",
            fontSize: 14,
          }}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{
          width: "100%",
          justifyContent: "center",
        }}>
          <TouchableOpacity style={{
            width: "85%",
            height: 45,
            backgroundColor: SecondaryColor,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 15,
            marginTop: 20,
            alignSelf: "center",
          }}
            onPress={_login}>
            <Text style={{
              color: "#ffffff",
            }}>LOGIN</Text>
          </TouchableOpacity>

          <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
            marginTop: "2%",
          }}>
            <Text style={{
              color: "#b2abb4",
              fontSize: 15,
            }}>Don't have an account?  </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.signup)
              }}>
              <Text style={{
                color: "white",
                fontSize: 15,
              }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;