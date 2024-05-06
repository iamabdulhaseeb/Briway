import { Alert, } from 'react-native';
import { CommonActions } from '@react-navigation/native';


export default class Helper {



    // Alert Message
    showAlert(message) {
        Alert.alert(
            "",
            message,
            [
                {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    //  onPress: () => console.log("OK Pressed")
                }
            ]
        );
    }





    // It pass the screen to the next after the time complete
    resetStackAndMove(navigation, routeName) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: routeName },
                    ],
                })
            );
    }



    //  Timer to move screen Forward
    ScreenTimer(navigation, screenName, sec) {

        // Timer
        setTimeout(() => { this.resetStackAndMove(navigation, screenName) }, sec)
    }




}



//  connect(ReducerProps, ReducerActions)(Helper)