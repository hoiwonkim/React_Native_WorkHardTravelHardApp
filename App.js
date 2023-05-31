// // ./App.js

// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, } from 'react-native';

// import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   // TouchableHighlight,
//   // TouchableWithoutFeedback,
//   // Pressable,
//   TextInput,
//   Alert,
//   ScrollView,
// } from "react-native";
// import { Fontisto } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { theme } from "./colors";

// const STORAGE_KEY = "@toDos";

// export default function App() {
//   const [working, setWorking] = useState(true);
//   const [text, setText] = useState("");
//   const [toDos, setToDos] = useState({});
//   useEffect(() => {
//     loadToDos();
//   }, []);
//   const travel = () => setWorking(false);
//   const work = () => setWorking(true);
//   const onChangeText = (payload) => setText(payload);
//   // const addToDo = () => {
//   const saveToDos = async (toSave) => {
//     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
//   };
//   const loadToDos = async () => {
//     const s = await AsyncStorage.getItem(STORAGE_KEY);
//     const parsedToDos = s ? JSON.parse(s) : {};
//     setToDos(parsedToDos);
//   };
//   const addToDo = async () => {
//    if (text === null || text === "") {
//      return;
//    }
//    // Savr to do
//    // const newToDos = Object.assign({}, toDos, {
//    const newToDos = {
//      ...toDos,
//      // [Date.now()]: { text, work: working },
//      [Date.now()]: { text, working },
//      // });
//    };
//    setToDos(newToDos);
//    await saveToDos(newToDos);
//    setText("");
//  };
//  const deleteToDo = (key) => {
//   Alert.alert("Delete To Do", "Are you sure?", [
//     { text: "Cancel" },
//     {
//       text: "I'm Sure",
//       style: "destructive",
//       onPress: () => {
//         const newToDos = { ...toDos };
//         delete newToDos[key];
//         setToDos(newToDos);
//         saveToDos(newToDos);
//       },
//     },
//   ]);
// };
// //  console.log(toDos);

//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       <StatusBar style="auto" />
//       <View style={styles.header}>
//         {/* <TouchableOpacity>
//           <Text style={styles.btnText}>Work</Text> */}
//         <TouchableOpacity onPress={work}>
//           <Text
//             style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
//           >
//             Work
//           </Text>
//         </TouchableOpacity>
//         {/* <TouchableOpacity> */}
//         {/* <TouchableHighlight 
//           underlayColor= "red"
//           activeOpacity={0.5}
//           onPress={() => consloe.log("pressed")}> */}
//         {/* <TouchableWithoutFeedback onPress={() => console.log("pressed")}> */}
//         {/* <Pressable> */}
//         {/* <Text style={styles.btnText}>Travel</Text> */}
//         {/* </Pressable> */}
//         {/* </TouchableWithoutFeedback> */}
//         {/* </TouchableHighlight> */}
//         <TouchableOpacity onPress={travel}>
//           <Text
//             style={{
//               ...styles.btnText,
//               color: !working ? "white" : theme.grey,
//             }}
//           >
//             Travel
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         onSubmitEditing={addToDo}
//         onChangeText={onChangeText}
//         returnKeyType="done"
//         value={text}
//         // secureTextEntry
//         // multiline
//         // returnKeyType="done go next serach send none previous"
//         // keyboardType="number-pad email-address phone-pad decimal-pad numberic visiable-password"
//         // autoCapitalize={"Sentences"}
//         placeholderTextColor="green"
//         // placeholder={working ? "Add a To Do" : "Where do you want to go?"}
//         placeholder={
//           working ? "What do you have to do?" : "Where do you want to go?"
//         }
//         style={styles.input}
//       />
//       <ScrollView>
//         {/* {Object.keys(toDos).map((key) => (
//           <View style={styles.toDo} key={key}>
//             <Text style={styles.toDoText}>{toDos[key].text}</Text>
//           </View>
//         ))} */}
//         {Object.keys(toDos).map((key) =>
//           toDos[key].work === working ? (
//             <View style={styles.toDo} key={key}>
//               <Text style={styles.toDoText}>{toDos[key].text}</Text>
//               <TouchableOpacity onPress={() => deleteToDo(key)}>
//                 <Fontisto name="trash" size={18} color={theme.grey} />
//               </TouchableOpacity>
//             </View>
//           ) : null
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor: theme.bg,
//     paddingHorizontal: 20,
//   },
//   header: {
//     justifyContent: "space-between",
//     flexDirection: "row",
//     marginTop: 100,
//   },
//   btnText: {
//     fontSize: 38,
//     fontWeight: "600",
//     // color: "white",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     // marginTop: 20,
//     marginVertical: 20,
//     fontSize: 18,
//   },
//   toDo: {
//     // backgroundColor: theme.grey,
//     backgroundColor: theme.toDoBg,
//     marginBottom: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   toDoText: {
//     color: "white",
//     fontSize: 16,
//     // fontWeight: "500",
//     fontWeight: "600",
//   },
// });

// ./App.js

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    loadToDos();
  }, []);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      console.log("Error saving todos: ", error);
    }
  };

  const loadToDos = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedToDos = s ? JSON.parse(s) : {};
      setToDos(parsedToDos);
    } catch (error) {
      console.log("Error loading todos: ", error);
    }
  };

  const addToDo = async () => {
    if (!text.trim()) {
      return;
    }

    const newToDo = { text, working };
    const newToDos = { ...toDos, [Date.now()]: newToDo };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        // style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnText,
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={
          working ? "What do you have to do?" : "Where do you want to go?"
        }
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

