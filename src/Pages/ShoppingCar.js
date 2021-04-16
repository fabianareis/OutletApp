import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function ShoppingCar({navigation}) {

    return (
        <View style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="#F1F1F1" />

                    <View>
                        <Text style={styles.tituloH1}>Meu Carrinho</Text>

                    </View>

                    <View>
                    <Text  style={styles.tituloH2}> Produtos</Text>

                    </View>

                    <View style={styles.produtos}>
                    <Text  style={styles.tituloH2}> AQUI VÃO SER LISTADOS OS PRODUTOS</Text>

                    </View>

                    <View  style={styles.total}> 
                    <Text  style={styles.totalText}>Total:</Text>
                    <Text  style={styles.totalValor}>R$1000,00</Text>

                    </View>

                    <View  style={styles.viewButton}>
                        <TouchableOpacity  style={styles.button}> 
                            <Text  style={styles.textButton}>COMPRAR</Text>
                        </TouchableOpacity>
                    </View>

    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'column',

        // alignItems:'center',   
        // justifyContent: 'center',
        // margin: 20,
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
        fontWeight: "bold",
        marginLeft: 10,

    },
    
    produtos:{
        borderWidth:1,
        height: 400,
        width: 300,
        marginLeft: 10
    },

    total:{
        flexDirection: 'row',
        // left: "25%",
        // flexDirection: 'row-reverse',
        alignItems: "center",
        // top:"100%",
        // marginRight: "10%",
        justifyContent: "flex-end"
        
    },

    totalText:{
        fontWeight: "bold",
        fontSize: 18,
        margin: 10

    },

    totalValor:{
        fontWeight: "bold",
        fontSize: 22,
        margin: 10

    },

    viewButton:{
        alignSelf: "flex-end",
        marginEnd: 10
    },

    button:{
        // left: "25%",
        borderColor: "red",
        borderWidth: 1,
        width:150,
        height: 40,
        color: "#FFF",
        // marginBottom: 30,
        borderRadius: 15,
        // paddingLeft: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderColor: "red",
        // justifyContent: "center",
        // alignSelf: "center"

    },

    textButton:{
        color: '#FFF',
        fontWeight: "bold"
    }



});