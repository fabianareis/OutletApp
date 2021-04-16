import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, FlatList, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Register({navigation}) {
    const onHome = () =>{
        navigation.navigate('Home')
        
      }
    return (
        <View  style={styles.container}>

        <Text style={styles.tituloH1}>Preencha as informações de cadastro:</Text>
        <Text  style={styles.tituloH3}>O preenchimento correto dos dados é importante para que seus pedidos sejam entregues corretamente.</Text>

        <Text style={styles.tituloH2}>Dados Pessoais:</Text>

        <View style={styles.line}>
            <Text style={styles.textInput}>Nome Completo: </Text>
            <TextInput placeholder="ex: João da Silva" placeholderTextColor = "#6b6b6b" style={styles.inputName}></TextInput>
        </View>

        <View style={styles.line}>
            <Text style={styles.textInput}>CPF: </Text>
            <TextInput placeholder="ex: 000.000.000-00" placeholderTextColor = "#6b6b6b" style={styles.inputCpf}></TextInput>
        </View>

        <View style={styles.line}>
            <Text style={styles.textInput}>Telefone: </Text>
            <TextInput placeholder="ex: (37) 3333-3333" placeholderTextColor = "#6b6b6b" style={styles.inputPhone}></TextInput>
        </View>

        <View style={styles.line}>
            <Text style={styles.textInput}>Celular: </Text>
            <TextInput placeholder="ex: (37) 99999-9999" placeholderTextColor = "#6b6b6b" style={styles.inputPhone}></TextInput>
        </View>

        <Text style={styles.tituloH2}>Endereço:</Text>

        <View style={styles.line}>
            <Text style={styles.textInput}>Rua: </Text>
            <TextInput placeholder="ex: Rua Benedito Valadares" placeholderTextColor = "#6b6b6b" style={styles.inputRua}></TextInput>
        </View>

        <View style={styles.line}>
            <Text style={styles.textInput}>Número: </Text>
            <TextInput placeholder="ex: 100" placeholderTextColor = "#6b6b6b" style={styles.inputN}></TextInput>
            <Text style={styles.textInput}>Bairro: </Text>
            <TextInput placeholder="ex: São Francisco" placeholderTextColor = "#6b6b6b" style={styles.inputB}></TextInput>
        </View>

        <View style={styles.line}>
            <Text style={styles.textInput}>Cidade: </Text>
            <TextInput placeholder="ex: Pará de Minas" placeholderTextColor = "#6b6b6b" style={styles.inputCi}></TextInput>
            <Text style={styles.textInput}>CEP: </Text>
            <TextInput placeholder="ex: 35660-000" placeholderTextColor = "#6b6b6b" style={styles.inputCep}></TextInput>
        </View>

        

        <TouchableOpacity  style={styles.button}
                onPress={onHome}
        >
            <Text style={styles.textButton}>CADASTRAR</Text>
        </TouchableOpacity>




        </View>

    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,        
        // alignItems: "center",
        // flexDirection: "column",
        backgroundColor: "#F1F1F1",
        margin: 10

    },

    subContainer:{
        // alignItems: "center",
        flexDirection: "column",
        // justifyContent: "center",
        paddingVertical: "50%"


    },

    line:{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },

    tituloH1:{
        fontSize: 18,
        color: "#111",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    },

    tituloH2:{
        fontSize: 16,
        color: "#111",
        marginTop: 15,
        fontWeight: "bold" 
    },

    tituloH3:{
        fontSize: 13,
        color: "#111",
        textAlign: 'center'
    },

    textInput:{
        fontSize: 15
    },

    input:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        // width:250,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,

    },

    inputName:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:240,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,

    },

    inputCpf:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:140,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,

    },

    inputPhone:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:140,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,

    },

    inputRua:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:320,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,
    },

    inputN:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:100,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,
    },

    inputB:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:140,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,
    },

    inputCi:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:160,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,
    },

    inputCep:{ 

        borderColor: "#6b6b6b",
        borderBottomWidth: 1,
        width:100,
        height: 40,
        color: "#111",
        marginBottom: 8,
        borderRadius: 15,
        paddingLeft: 8,
    },

    button:{
        borderColor: "red",
        borderWidth: 1,
        width:150,
        height: 40,
        color: "#FFF",
        marginBottom: 30,
        borderRadius: 15,
        paddingLeft: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderColor: "red",
        // justifyContent: "center",
        alignSelf: "center"

    },

    textButton:{
        color: '#FFF',
        fontWeight: "bold"
    }

    });

