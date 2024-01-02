import React,{useState} from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Home(){
    return (
        <View style={styles.container}>
            <Text>We come home!</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    }
});