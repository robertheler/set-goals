import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default Goal = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <View style={styles.item}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
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
