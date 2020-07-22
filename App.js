import React, { useState } from "react";
import Goal from "./components/Goal";
import Input from "./components/Input";
import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);

  // second syntax guarantees the most recent state
  //const addGoalHandler = () => setCurrentGoals([...currentGoals, goal]);
  const addGoalHandler = goal =>
    setCurrentGoals(currentGoals => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: goal
      }
    ]);

  return (
    <View style={styles.screen}>
      <Input addGoal={addGoalHandler} />
      <FlatList
        data={currentGoals}
        renderItem={itemData => <Goal item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 20
  }
});
