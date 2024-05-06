import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveUser = async(user,token) => {
   if(user) {
    AsyncStorage.setItem("user",JSON.stringify(user));
   }
   if(token) {
    AsyncStorage.setItem("token",JSON.stringify(token));
   }
}



export const getUser = async() => {
    const usr = await AsyncStorage.getItem('user');
    if(usr) {
        return JSON.parse(usr);
    } else {
        return null;
    }
}


export const getToken = async() => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        return JSON.parse(token);
    } else {
        return null;
    }
}


export const logout = async(user,token) => {
   await AsyncStorage.removeItem("token");
   await AsyncStorage.removeItem("user");

 }

