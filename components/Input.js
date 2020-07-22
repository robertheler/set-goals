import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default Input = ({ addGoal }) => {
  const [goal, setGoal] = useState("");
  const goalInputHandler = enteredText => setGoal(enteredText);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goals"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="Add" onPress={() => addGoal(goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10
  }
});
