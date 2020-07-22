import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Goal = ({ item }) => {
  return (
    // wrap in View because View has more styling options then Text
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 20
  }
});