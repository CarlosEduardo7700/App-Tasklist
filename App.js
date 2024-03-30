import { StyleSheet, Image, ImageBackground, Text, TextInput, Switch, Button, View, ScrollView } from 'react-native';
import { useState } from 'react';
import imgTasklist from "./assets/tasklist.png"
import imgCheckTrue from "./assets/check.png"
import imgCheckFalse from "./assets/circle.png"

export default function App() {

  const [titulo, setTitulo] = useState("")
  const [data, setData] = useState("")
  const [prioridade, setPrioridade] = useState("1")
  const [concluida, setConcluida] = useState(false)

  const [listaObj, setListaObj] = useState([])

  function mapa(obj, id) {
    return (
      <View key={id} style={styles.tasksBox}>
        
        { obj.concluida &&
          <Image source={imgCheckTrue} style={{width: 30, height: 30}}/>
          || obj.concluida == false && 
          <Image source={imgCheckFalse} style={{width: 30, height: 30}}/>}
        
        <View style={{flex: 1, alignItems: "center"}}>
          { obj.concluida &&
          <Text style={{textDecorationLine: "line-through"}}>{obj.titulo}</Text>
          || obj.concluida == false && 
          <Text>{obj.titulo}</Text>}
          <Text>{obj.data}</Text>
        </View>
        
        <Text>{obj.prioridade}</Text>

      </View>
    )
  }

  const listaView = listaObj.map( mapa )

  return (
    <View style={styles.container}>

      <View style={{width: "100%", flex: 1}}>

        <ImageBackground source={imgTasklist} style={styles.imgHeader}>
          <Text style={styles.textoHeaderUp}>Hoje</Text>
          <Text style={styles.textoHeaderDown}>sex, 15 de maio</Text>
        </ImageBackground>
        
      </View>

      <ScrollView style={{width: "100%", flex: 3, padding: 20, backgroundColor: "#EEE"}}>
        
        <Text style={styles.labelInput}>Título</Text>
        <TextInput style={styles.inputBox} value={titulo} onChangeText={setTitulo}/>
        <Text style={styles.labelInput}>Data de Término</Text>
        <TextInput style={styles.inputBox} value={data} onChangeText={setData}/>
        <Text style={styles.labelInput}>Prioridade</Text>
        <TextInput style={styles.inputBox} value={prioridade} onChangeText={setPrioridade}/>


        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 15}}>
          <Text style={styles.labelInput}>Concluída</Text>
          <Switch value={concluida} onValueChange={setConcluida}/>
        </View>


        <Button title='Salvar' onPress={
          () => {
            const novoObj = {
              titulo: titulo,
              data: data,
              prioridade: prioridade,
              concluida: concluida
            }
            setListaObj([...listaObj, novoObj])
          }
        }/>

        <View>
          {listaView}
        </View>
      
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgHeader: {
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textoHeaderUp: {
    fontSize: 50,
    backgroundColor: "#9999",
    color: "white",
    width: "80%",
    textAlign: "center",
    marginBottom: 20
  },
  textoHeaderDown: {
    fontSize: 20,
    backgroundColor: "#9999",
    color: "white",
    width: "80%",
    textAlign: "center"
  },
  labelInput: {
    fontSize: 20,
    fontWeight: "500"
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    padding: 10,
    marginBottom: 15
  },
  tasksBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    borderBottomWidth: 1, 
    borderTopWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 10
  }
});
