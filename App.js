import React, { useState } from "react";
import Goal from "./components/Goal";
import Input from "./components/Input";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  // second syntax guarantees the most recent state
  //const addGoalHandler = () => setCurrentGoals([...currentGoals, goal]);
  const addGoalHandler = goal => {
    setCurrentGoals(currentGoals => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: goal
      }
    ]);
    setModalVisible(false);
  };

  const removeGoalHandler = key => {
    setCurrentGoals(currentGoals =>
      currentGoals.filter(goal => goal.key !== key)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setModalVisible(true)} />
      <Input
        addGoal={addGoalHandler}
        isVisible={isModalVisible}
        onCancel={() => setModalVisible(false)}
      />
      <FlatList
        data={currentGoals}
        renderItem={itemData => (
          <Goal item={itemData.item} onDelete={removeGoalHandler} />
        )}
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
