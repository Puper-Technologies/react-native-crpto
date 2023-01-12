import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Pressable
  } from "react-native";
  import React, { Suspense, useState } from "react";
  import tw from "tailwind-react-native-classnames";
  import { AntDesign } from "@expo/vector-icons";
  import UserAssestItem from "../components/UserAssestItem";
  import { useRecoilState } from "recoil";
  import { userAsset } from "../atom/UserAssets";
  import AssetModal from "../components/AssetModal";
  
  
  const UserScreen = () => { 
    const [asset, setAsset] = useRecoilState(userAsset);

    
    return (
      <Suspense fallback={<ActivityIndicator size="large" style={tw`mt-24`} />}>
        <View style={tw`px-4 py-2`}>
            <View>
                <Text style={tw`text-2xl text-white font-semibold`}>Welcome to XYZ</Text>
                {/* description */}
                <Text style={tw`text-sm text-white`}>Join the world's largest crypto exchange</Text>
            </View>
            {/* signup and login button */}
            <View style={tw`flex flex-row mt-2`}>
                <Pressable style={tw`bg-yellow-500 rounded-md shadow-md mt-2 flex-1 mr-1`}>
                <TextInput
                  onChange
                  style={tw`text-white p-2 text-center font-semibold text-base `}
                >
                  Login
                </Text>
                </Pressable>

                <Pressable style={tw`bg-gray-500 rounded-md shadow-md mt-2 flex-1 ml-1`}>
                <Text
                  style={tw`text-white p-2 text-center font-semibold text-base `}
                >
                  Sign Up
                </Text>
                </Pressable>
            </View>
            <View style={tw`mt-3`}>
                <View style={tw`bg-gray-800 mt-1 px-1 py-2 shadow-md rounded-md`}>
                    <Text style={tw`text-xl text-white`}> Settings </Text>
                </View>
                <View style={tw`bg-gray-800 mt-1 px-1 py-2 shadow-md rounded-md`}>
                    <Text style={tw`text-xl text-white`}> Help & Support </Text>
                </View>
                <View style={tw`bg-gray-800 mt-1 px-1 py-2 shadow-md rounded-md`}>
                    <Text style={tw`text-xl text-white`}> Share the App </Text>
                </View>
            </View>
        </View>
      </Suspense>
    );
  };
  
  export default UserScreen;
  