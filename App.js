import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert, ScrollView, FlatList } from 'react-native';
// import ToastManager, { Toast } from 'toastify-react-native'
import { useState } from 'react';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([])
  // const showToasts = () => {
  //   Toast.success('Promised is resolved')
  // }
  function addTo() {
    if (text.length < 1) return
    const id = uuid.v4();
    console.log(id)
    const temp = {
      text,
      id
    }
    setTodo([
      temp, ...todo
    ])
    setText("")
  }
  function goalInputHandler(evt) {

    // Alert.alert("some changes occurs")
    console.log(evt)
    setText(evt)
  };
  function removeTodo(id) {
    const temp = todo.filter((todo) => todo.id !== id);
    setTodo([...temp
    ])
  }

  function handleKeyDown(e) {
    console.log(e.nativeEvent)
    if (e.nativeEvent.key == "Enter") {
      // dismissKeyboard();
      console.log("enter was pressed")
    }
    // console.log(e)
  }
  return (
    <View style={styles.appContainer}>
      <View style={{ flex: 0 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            paddingBottom: 10,
            fontWeight: "bold",
            color: "blue",
            textTransform: "uppercase",


          }}
        >
          MY First REact native app

        </Text>

      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onKeyPress={handleKeyDown}
          value={text}
          onChangeText={goalInputHandler}
          placeholder='Your course goal !' style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            flex: 1,
            paddingLeft: 10,
            height: 30,
            borderColor: "#cccccc"

          }} />
        <Button
          color="#841584"
          title='Add Goal'
          onPress={addTo}
        />
      </View>
      <FlatList
        data={todo}
        keyExtractor={({id})=>id}
        
        renderItem={({ index, item: { id, text } }) => {
          return (
            <View  style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomColor: "#ccccce",
              borderBottomWidth: 1,
              paddingBottom: 5,
              shadowColor: "gray",
              shadowOffset: 10
            }}>
              <Text
                style={{
                  flex: 0,
                  marginRight: 10,

                }}
              >
                {index}
              </Text>
              <Text
                style={{
                  flex: 1
                }}
              >{text}</Text>
              <Button title='remove'
                color={"red"}
                onPress={() => removeTodo(id)}
              />
            </View>
          )
        }}

        style={{
          flex: 1,
          borderColor: "green",
          borderWidth: 2,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingHorizontal: 10,
          paddingTop: 30
        }}>
        {/* {
          todo.map((item, index) => {
            const { id, text } = item
            return (
             
            )
          })
        } */}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "column",
    display: "flex",
    borderColor: "red",
    borderWidth: 4,
    height: "100%",
    columnGap: 10,
    rowGap: 10
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
    flex: 0
  },

});
