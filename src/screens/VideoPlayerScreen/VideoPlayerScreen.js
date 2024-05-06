import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Dimensions, Alert } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import Entypo from 'react-native-vector-icons/Entypo';
import { Api } from '../../utils/Api/api';
import { routes } from '../../utils/Navigation/routes';
const VideoPlayerScreen = () => {
    const navigation = useNavigation()
  const [isPlaying, setIsPlaying] = useState(false);
  const {params} = useRoute();
  const courseDetails = params?.course;
  const {title,videoUrl,thumbnail,myCourseId,contentId} = params;

  const handlePlayPress = () => {
    setIsPlaying(true);
  };

  const _markVideoFinished = async() => {
    try {
       const api = new Api();
       const apiCall = await api.post('/courses/mark-video-completed',{
        myCourseId:myCourseId,
        contentId:contentId
       },true);
       navigation.navigate(routes.courseDetail,{
        course:courseDetails
       })
    } catch(e) {
      console.log(e?.response?.data);
      alert(JSON.stringify(e))
    }
  }

  return (
    <View style={styles.container}>
      {/* <Video
        source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
        paused={false}
        resizeMode="cover"
        style={styles.videoPlayer}
        fullscreen={isPlaying}
      /> */}
      {
        isPlaying ? 
        <VideoPlayer
        onEnd={() => {
          Alert.alert('Video Finished','You have finished this video, want to mark this video completed?',[{text:'No'},{text:'Yes',onPress:_markVideoFinished}])
        }}
        source={{uri: videoUrl}}
        navigator={navigation}
      style={{flex:1}}
      onBack={() => setIsPlaying(false)}
      />
      :
      null
      }
     {
        isPlaying ? 
        null:
        <ImageBackground
        source={{
          uri:thumbnail
        }}
        style={{
          width:'95%',
          height:Dimensions.get('screen').height / 1.2,
          borderRadius:20,
          alignSelf:'center',
          marginLeft:10,
          marginTop:30
        }}
        imageStyle={{
          borderRadius:20,
          alignSelf:'center',
         
        }}
        > 
        <View style={{flex:1,width:'95%',borderRadius:20,backgroundColor:'rgba(0,0,0,0.6)',justifyContent:'center',alignItems:'center'}}>
        {
          isPlaying ? null:
          <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{title}</Text>
          <Text style={styles.videoDuration}>Duration: 3:25</Text>
        </View>
       }
        {!isPlaying && (
          <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
            {/* Play button icon */}
            <Entypo
            name='controller-play'
            color='black'
            size={30}
            />
          </TouchableOpacity>
        )}
        </View>
  
        </ImageBackground>
     }
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background color
  },
  videoPlayer: {
    flex: 1,
  },
  videoInfo: {
    position:'absolute',
    bottom:10,
    left:10
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoDuration: {
    color: '#888888',
    fontSize: 16,
  },
  playButton: {
   
    backgroundColor: 'white',
    borderRadius: 50,
    height:55,
    width:55,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default VideoPlayerScreen;