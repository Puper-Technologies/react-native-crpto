import axios from 'axios';
import configStore from '../common/config';
import { parseJsonResponse } from '../common/utls/parseJsonResponse';
export const loginUser = async (email: string, password: string)=>{
    try {
        const config = configStore();
        const response = await axios.post(`${config.BACKED_BASE_API}/api/v1/auth/login`, {
            email,
            password
        });
        return parseJsonResponse(true, response.data, null);
    } catch (error: any) {
        console.log(error);
        return parseJsonResponse(false, null, error.message)
    }
}

export const signUpUser = (email: string, password: string )=>{
    try {
        
    } catch (error) {
        
    }
}

export const getUserFromToken = (bearerToken: string)=>{
    try {
        
    } catch (error) {
        
    }
}