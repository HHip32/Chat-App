import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Button } from 'react-native-elements';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Register
                const user = userCredential.user;
                const photoURL = avatar ? avatar : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x';
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        alert('Registered, please login.');
                    })
                    .catch((error) => {
                        alert(error.message);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#E68E6B' }}>Sign Up</Text>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
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
            <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value={avatar}
                onChangeText={text => setAvatar(text)}
            />
            <View style={{ width: '90%', height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={register}
                >
                    <Text style={styles.txt}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.txt}>Sign In</Text>
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