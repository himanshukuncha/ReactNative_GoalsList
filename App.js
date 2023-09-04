import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import SingleItem from "./components/SingleItem";
import Input from "./components/Input";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  function addgoal(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function handleDelete(id) {
    // console.log("delete");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function modalfunction() {
    setModal(!modal);
  }
  return (
    <>
      <StatusBar style="dark"/>
      <View style={styles.appContainer}>
        <Text style={{ fontSize: 50, marginBottom: 10, fontWeight: 200 }}>
          Goals List
        </Text>
        {modal && <Input onAddGoal={addgoal} cancelModal={modalfunction} />}
        {goals.length === 0 && (
          <View style={{ marginLeft: 10, marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 100 }}>
              No Goals added yet
            </Text>
          </View>
        )}
        <View style={styles.goals}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <SingleItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  delete={handleDelete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          <View style={{ marginBottom: 60, marginTop: 20 }}>
            <Button
              title="Add New Goal"
              onPress={modalfunction}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  
});
