import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
//import icon from './assets/icon.png'; Es lo mismo el import que el require

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={icon} style={{width:200, height: 200}}></Image>   */}
      {/* <Image source={{ uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"}} style={{width:215, height: 300}}></Image> */}
      {/* Si la imagen es remota siempre debemos proporcionarle un width y height */}
      {/* <Text style={{ color:'white' }}>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="light" />
      {/*No es parte de react native, es parte de expo */}
      {/* <Button title='Pulsa aquí' onPress={() => alert("Hola")} color="#235"></Button> */}
      {/* No se puede estilar el button, tampoco se le puede pasar un children, es un botón nativo */}
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aquí</Text>
      </TouchableHighlight>
      {/* Botón el cual podemos personalizar como queramos */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
