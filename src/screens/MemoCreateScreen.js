import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";

class MemoCreateScreen extends React.Component {
  state = {
    body: "",
  };

  handleSubmit() {
    const currentUser = this.props.route.params.currentUser;
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body: this.state.body,
        created_on: new Date(),
      })
      .then((docRef) => {
        this.props.navigation.goBack();
      })
      .catch((error) => {
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => {
            this.setState({ body: text });
          }}
        />
        <CircleButton onPress={this.handleSubmit.bind(this)}>✔︎</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    backgroundColor: "#ddd",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
