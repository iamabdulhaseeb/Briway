import { StyleSheet, Dimensions } from 'react-native';





// Justify Content
export const JustifyView = StyleSheet.create({
    Center: { justifyContent: 'center', alignItems: 'center' },
    Centerbottom: { justifyContent: 'flex-end', alignItems: 'center' },
    CenterRight: { justifyContent: 'center', alignItems: 'flex-end' },
    RightBottom: { justifyContent: 'flex-end', alignItems: 'flex-end' },

});




// View Box Shadow
export const BoxShadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
}




// Fix Width / height
export const Fixed = {
    width: Dimensions.get('window').width+50,
    height: Dimensions.get('window').height+50 
}



