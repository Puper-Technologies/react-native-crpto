import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { UserType } from "../@types/user.type";
import { loginUser } from "../apis/auth";
import { verifyTokenExpiry } from "../functions/verifyTokenExpiry";

let defaultUserVault: UserType|null = null;

export const authContext = createContext<UserType|null>(defaultUserVault);

export const AuthProvider = (props: PropsWithChildren)=>{
    const [user, setUser] = useState(defaultUserVault);

    useEffect(()=>{
        // make api call for login
        // extract token from async storage
        // check if the token is valid 
        // if token is valid then update user state
        // else do nothing
        async ()=>{
            const token = await AsyncStorage.getItem('bearerToken');
            
            if(token)
            {
                const { status, decoded } = verifyTokenExpiry(token);
                if(!status){
                    // clear the AsyncStorage
                    await AsyncStorage.removeItem('bearerToken');
                }
            }
        }
    },[user])

    const login = async (email: string, password: string)=>{
        const user = await loginUser(email, password);
        setUser(user.data.data.attributes);
        AsyncStorage.setItem('bearerToken', user.data.data.attributes.accessToken );
    }

    const logout = async()=>{
        setUser(null);
        await AsyncStorage.removeItem('bearerToken');
    }

    return <authContext.Provider value={{user, login, logout}}>
        {props.children}
    </authContext.Provider>
}


