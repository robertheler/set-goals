import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default Input = ({ addGoal, isVisible, onCancel }) => {
  const [goal, setGoal] = useState("");
  const goalInputHandler = enteredText => setGoal(enteredText);

  const addGoalHnadler = () => {
    addGoal(goal);
    setGoal("");
  }
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title="Cancel" color="red" onPress={onCancel}/>
        <Button title="Add" onPress={addGoalHnadler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.5,
    marginTop: 300,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    backgroundColor: "pink"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20
  }
});
