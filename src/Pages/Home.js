import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Home({navigation}) {

    const onCar = () =>{
        navigation.navigate("ShoppingCar")
    }

    const onProduct = () =>{
        navigation.navigate("Product")
    }

    return (
        <View style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="#F1F1F1" />

            <View style={styles.backTitulo}>

            <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            >
            <Icon name="menu" size={35} color="#FFF" />
            </TouchableOpacity>

            <Text  style={styles.textH1} >Outlet App</Text>

            <TouchableOpacity
            onPress={onCar}>
            <Icon name="shopping-cart" size={35} color="#FFF" />
            </TouchableOpacity>
            </View>

            <View style={styles.centerInput}>
            <View  style={styles.input}>
            <TextInput placeholder="Buscar produtos..." placeholderTextColor = "#6b6b6b"></TextInput>
            <Icon name="filter-alt" size={35} color="red" />
            </View>
            </View>

            <View  style={styles.productLine}>

            <TouchableOpacity style={styles.product}
            onPress={onProduct}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.product}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            </View>



            <View  style={styles.productLine}>

            <TouchableOpacity style={styles.product}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.product}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            </View>



            <View  style={styles.productLine}>

            <TouchableOpacity style={styles.product}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.product}>
            <Image
            style={styles.productImage}
            source={require('../Assets/tshirt.png')}
            />
            <Text style={styles.productName}>Camisa</Text>
            <Text style={styles.productValue}>R$90,00</Text>

            </TouchableOpacity>

            </View>


    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        // alignItems:'center',   
        // justifyContent: 'center',
        // margin: 20,
    },

    backTitulo:{
        backgroundColor: "red",
        flexDirection: 'row',
        // justifyContent: 'center',
        // textAlign: 'center',
        height: 55,      
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 8
        
      },

      textH1:{
          color: "#FFF",
          fontSize: 18,
          fontWeight: "bold"
      },

      centerInput:{
          alignItems: "center"
      },

      input:{ 
        flexDirection: 'row',
        borderColor: "red",
        borderWidth: 1,
        width:"95%",
        height: 40,
        color: "#111",
        marginBottom: 8,
        marginTop: 10,
        borderRadius: 15,
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: "space-between"
    },

    productLine:{
        flexDirection: 'row',
        justifyContent: "center"

    },

    product:{
        alignItems: "center",
        margin: 15,
        borderWidth: 1,
        height: 170,
        width: 140,
        padding: 8
    },

    productName:{
        textAlign: "center",
    },

    productValue:{
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        fontSize: 17
    },

    productImage:{
        height: 100,
        width: 100
    }

});