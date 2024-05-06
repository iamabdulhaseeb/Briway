import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SecondaryColor, primaryColor } from '../../styles/Colors';
import BottomTabNavigation from '../../utils/Navigation/BottomNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getUser, logout } from '../../utils/Services/Authservice';
import moment from 'moment';
import { routes } from '../../utils/Navigation/routes';

const ProfileScreen = (props) => {
  const [userInfo,setUserInfo] = useState(null);

  const _getUserInfo = async() => {
    try {
      const usr = await getUser();
      setUserInfo(usr);
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    _getUserInfo();
  },[])
  const SettingsTab = ({ icon, title, isLogout,onPress }) => {
    return (
      <TouchableOpacity
      onPress={onPress}
      style={{
        width: '90%',
        height: 55,
        flexDirection: 'row', alignItems: 'center',
        alignSelf: 'center'
      }}>
        {icon}
        <Text style={{ color: isLogout ? 'red' : 'white', fontSize: 18, fontWeight: '500', paddingLeft: 20 }}>{title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <BottomTabNavigation />
      </View>
      <View style={{
        width: '95%',
        alignSelf: 'center'
      }}>
        <Image
          source={require('../../../logo.png')}
          style={{
            height: 50,
            width: 100,
            // alignSelf:'center'
          }}
        />
        {/* <Text style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold'
        }}>
          My Profile
        </Text> */}
        {/* <Text style={{
          color: 'white',
          fontWeight: '300',
          fontSize: 12
        }}>This is your profile, track it</Text> */}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginTop: 20 }}>
         <View style={{
          width:100,
          height:100,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:SecondaryColor,
          borderRadius:100/2
         }}>
          <Text style={{
            color:'white',
            fontSize:60,
            fontWeight:'bold'
          }}>{userInfo ? userInfo?.fullname[0] : ''}</Text>
         </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
          }}>{userInfo?.fullname}</Text>
          <Text style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500'
          }}>{userInfo?.email}</Text>
          <Text style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '300'
          }}>Member since {moment(userInfo?.created_at).format("MMMM YYYY")}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{
          width: '50%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.3,
          borderTopColor: 'white',
          borderBottomColor: 'white',
          borderRightColor: 'white'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>22</Text>
          <Text style={{ fontWeight: '400', fontSize: 15, color: 'white' }}>Ongoing courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: '50%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.3,
          borderTopColor: 'white',
          borderBottomColor: 'white'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>22</Text>
          <Text style={{ fontWeight: '400', fontSize: 15, color: 'white' }}>Completed courses</Text>
        </TouchableOpacity>
      </View>

      <View>
        <SettingsTab
        onPress={() => {
          props.navigation.navigate(routes.myCourses);
        }}
          title='My Courses'
          icon={
            <Ionicons
              name='ios-book'
              color='white'
              size={25}
            />
          }
        />
        <SettingsTab
          title='Watch Later'
          icon={
            <MaterialIcons
              name='watch-later'
              color='white'
              size={25}
            />
          }
        />

        <SettingsTab
          title='Tell Your Friend'
          icon={
            <FontAwesome5
              name='user-friends'
              color='white'
              size={25}
            />
          }
        />

        <SettingsTab
          title='Change Password'
          icon={
            <Entypo
              name='lock'
              color='white'
              size={25}
            />
          }
        />

        <SettingsTab
          title='Deactivate Account'
          icon={
            <AntDesign
              name='deleteuser'
              color='white'
              size={25}
            />
          }
        />


        <SettingsTab
        onPress={logout}
          title='Logout'
          icon={
            <MaterialIcons
              name='logout'
              color='red'
              size={25}
            />
          }
          isLogout={true}
        />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    paddingTop: 30
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: '#1A1A1A', // Dark gray background for image
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  optionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;