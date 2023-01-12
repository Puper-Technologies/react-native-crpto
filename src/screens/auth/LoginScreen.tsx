import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { UserType } from "../../@types/user.type";
import { loginUser } from "../../apis/auth";
import { authContext } from "../../contexts/auth.context";

export default function Login({navigation}: any) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    // const {user, logi} = authContext;
    const { user, login, logout } = useContext(authContext) as UserType;
    useEffect(()=>{
        if(user){
            navigation.navigate('UserScreen')
        }
    }, [user])
    return (
        <View style={tw`flex items-center justify-center h-full px-10`}>
            <View style={tw`shadow-md rounded-lg w-full`}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    defaultValue={email}
                    placeholderTextColor={'gray'}
                    placeholder="Email"
                    style={tw`bg-gray-800 py-4 px-4 shadow-sm rounded-md mt-2 text-white`}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={email}
                    secureTextEntry={true} placeholderTextColor={'gray'}
                    placeholder="Password"
                    style={tw`bg-gray-800 py-4 px-4 shadow-sm rounded-md mt-2  text-white`}
                />
                <TouchableOpacity
                    onPress={() => login(email, password)}
                    style={tw`bg-blue-400 py-4  shadow-sm rounded-md mt-2 items-center`}>
                    <Text style={tw`font-bold`}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-gray-400 mt-4`}>Forgot Password?</Text>
            <Text style={tw`text-gray-400 mt-4`} onPress={()=>navigation.navigate('SignUp')}>Not have Account? Sign Up</Text>
        </View>)
}