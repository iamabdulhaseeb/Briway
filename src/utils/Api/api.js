import axios from "axios";
import { getToken } from "../Services/Authservice";

export const prod_url = 'https://api.raft-service.com';
export const stagging_url = "http://192.168.100.9:3000";
export const base_url = stagging_url;
export class Api {

    async post(url,body,withToken) {
        try {
            const api_url = `${base_url}${url}`;
            const token = await getToken();
            const apiCall = await axios.post(api_url,body ? body : {},withToken ? {
                headers:{
                    'Authorization':"Bearer " + token
                }
            } : {});
            return apiCall;
        }
        catch(e) {
            console.log(e)
            throw e;
        }
    }

    async get(url,withToken) {
        try {
            const api_url = `${base_url}${url}`;
            const token = await getToken(); //getToken();
            console.log('line 30',token);
            const apiCall = await axios.get(api_url,withToken ? {
                headers:{
                    'Authorization':"Bearer " + token
                }
            } : {});
            return apiCall;
        }
        catch(e) {
            throw e;
        }
    }
}