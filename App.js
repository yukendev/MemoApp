import React from "react";
import { StyleSheet, View } from "react-native";
import MemoList from "./src/components/MemoList";
import Appbar from "./src/components/Appbar";
import CircleButton from "./src/elements/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 78,
  },
});
