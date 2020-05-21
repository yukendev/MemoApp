import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  handlePress() {
    this.props.navigation.navigate("MemoCreate", {
      currentUser: this.props.route.params.currentUser,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFDF6",
  },
});

export default MemoListScreen;
