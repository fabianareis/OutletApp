
import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar } from 'react-native'

export default function Login({navigation}) {

    const onHome = () =>{
        navigation.navigate('Home')
        
      }

      const onRegister = () =>{
        navigation.navigate('Register')
        
      }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F1F1F1" />


            {/* <Image style={styles.logo} source={require('../Assets/logoLSoft.png')} /> */}


            <View style={styles.subContainer}>
                <Text style={styles.tituloH1}>Bem vindo ao Outlet App!</Text>
                <Text style={styles.tituloH2}>Os melhores preços, em um só lugar.</Text>

            <TextInput placeholder="usuário" placeholderTextColor = "#6b6b6b" style={styles.input}></TextInput>
            <TextInput placeholder="senha" placeholderTextColor = "#6b6b6b"  style={styles.input}></TextInput>

            <TouchableOpacity style={styles.button}
                onPress={onHome}
                >
                <Text style={styles.btEntrarText}>ACESSAR</Text>
            </TouchableOpacity>

            <View style={styles.infoConta}>
                <Text style={styles.infoContaT}>Não tem conta? </Text>
            <TouchableOpacity 

                onPress={onRegister}>
                <Text style={styles.infoContaText}>Cadastre-se.</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.infoConta}>
                <Text style={styles.infoContaT}>Esqueceu a senha? </Text>
                <TouchableOpacity
            >
                <Text style={styles.infoContaText}>Recuperar.</Text>
            </TouchableOpacity>
            </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        flex: 1,        
        alignItems: "center",
        // flexDirection: "column",
        backgroundColor: "#F1F1F1"

    },

    subContainer:{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: "50%"


    },

    // logo:{
    //     marginBottom: 50,
    //     width:150,
    //     height: 50
    // },

    tituloH1:{
        marginTop: -70,
        fontSize: 23,
        color: "red",
        fontWeight: "bold"
    },

    tituloH2:{
        fontSize: 15,
        color: "#6b6b6b",
        marginBottom: 70
    },

    input:{ 

        borderColor: "red",
        borderWidth: 1,
        width:250,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8
    },


    button:{
        borderColor: "red",
        borderWidth: 1,
        width:250,
        height: 40,
        color: "#FFF",
        marginBottom: 30,
        borderRadius: 15,
        paddingLeft: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderColor: "red",

    },

    btEntrarText:{
        color: "#FFFFFF",
        fontWeight: "bold"
    },

    infoConta:{
    flexDirection: "row"
    },

    infoContaT:{
        color: "#6b6b6b",

    },

    infoContaText:{
        color: "#6b6b6b",
        textDecorationLine: 'underline'
    }

    });

