import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

export const Home = ()=>{
    return (
        <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>null}
                    style={styles.login}
                    accessibilityLabel="Learn more about this purple Pressable"

                >
                    <Text style={styles['login.text']}>
                        Login 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.signup}
                    onPress={()=>null}
                    accessibilityLabel="Learn more about this purple Pressable"
                >
                    <Text style={styles['signUp.text']}> Sign Up </Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 40,
    },
    login: {
        width:"100%",
        borderRadius: 15,
        elevation: 3,
        marginBottom:4,
        paddingHorizontal: 4,
        paddingVertical: 2,
        backgroundColor:"#3768e6",
        color:"white",
    },
    signup: {
        width:"100%",
        elevation: 3,
        borderRadius: 15,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginTop: 4,
        backgroundColor:"green",
        // transform: 
    },
    'login.text': {
        fontSize: 25,
        color:'#f0f1f5',
        paddingHorizontal: 8,
        textAlign:"center",
    },
    'signUp.text': {
        fontSize: 25,
        color:'#f0f1f5',
        paddingHorizontal: 8,
        textAlign:"center",
    }
})