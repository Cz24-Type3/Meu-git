import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function App(){
  return(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
);}

const Stack = createStackNavigator();
function meuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detalhes" component={DetalhesScreen}/>
    </Stack.Navigator>
  );
}

    const styles = StyleSheet.create({
      container: {
      flex: 1,
    },

    header: {
      backgroundColor: "#4CAF50",
      height: 80,
      justifyContent: "center",
      alignItems: "center",
    },

  titulo: {
    backgroundColor: "#51aa27",
    color: "#fff",
  },
  content: {
    backgroundColor: '#ddd',
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#ddd",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1.9,
    padding: 10,
    borderColor: "#000000",
  },
});

const item = StyleSheet.create({
    id:{
          color: "#fff"
    }
});
            
      export default function HomeScreen() {
        const [tarefa, setTarefa] = useState("");
        const [lista, setLista] = useState([]);
        
        return(
          <View style={styles.container}>

            <View style={styles.header}>
              <Text style={styles.titulo}>Caramelo Landy</Text>
            </View>

            <View style={styles.content}>
              <Text>Site do Caramelo</Text>
              <Image source={require('@/assets/images/Caramelo.jpg')}></Image>
              <TextInput placeholder="De um nome ao caramelo" style={styles.input}></TextInput>
            </View>

            <View style={styles.footer}>
              <Text>Final</Text>
            </View>

          </View>
        )
      }
    
