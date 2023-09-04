import { useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function Input(props) {
  const [enteredText, setEnteredText] = useState("");

  function input(e) {
    setEnteredText(e);
  }

  function addgoal() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  const isempty = enteredText.length === 0;

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.innerContainer}>
        <Image
          style={{ width: 100, height: 100, margin: 20 }}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your Goals"
          onChangeText={input}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Go Back"
              onPress={props.cancelModal}
              color="#a322e3"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addgoal}
              disabled={isempty}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  
});
