import React, { useState } from 'react';
import { View, Image, Text, StatusBar, StyleSheet, Button, Alert } from 'react-native';

// Komponen induk
export default function App() {
  // komponen untuk menyimpan link url gambar
  const imageUrl = "https://thediscerningcat.com/wp-content/uploads/2020/10/himalaya-cat.jpg";

  // Komponen anak
  const BioChildComponent = (props) => {
    return (
      <View>
        <Text>That is a {props.gender}</Text>
        <Text>That is a {props.name}</Text>
      </View>
    );
  }

  // Bikin state untuk simpan nama kucing
  const [catname, setCatname] = useState("Choco");

  // Event handler untuk merubah nama kucing, dengan tambahan alert
  const changeName = () => {
    setCatname("Milo");
    Alert.alert("Name Changed", "The name has been changed to Milo!");
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text>That's a Himalayan cat</Text>
      <BioChildComponent gender="male" name={catname} />
      <View style={styles.button}>
        <Button title="Change Name" onPress={() => setCatname("Cici")} />
      </View>
       {/* event handler */}
      <View style={styles.button}>
        <Button title="Change Name" onPress={changeName} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// untuk style CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 10,
  },
});