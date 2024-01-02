import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Login Succesfully!")
                navigation.navigate('Home')
            })
            .catch((error) => {
                // Đăng nhập thất bại, hiển thị thông báo lỗi
                const errorMessage = error.message;
                console.error('Lỗi đăng nhập:', errorMessage);
                Alert.alert('Error', errorMessage);
            });
    }


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#E68E6B' }}>Login</Text>
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <View style={{ width: '90%', height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={signIn}
                >
                    <Text style={styles.txt}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    <Text style={styles.txt}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    btn: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D86401'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});