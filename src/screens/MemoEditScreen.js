import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";

class MemoEditScreen extends React.Component {
  state = {
    body: "",
    key: "",
  };
  UNSAFE_componentWillMount() {
    const memo = this.props.route.params.memo;
    this.setState({ body: memo.body, key: memo.key });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();
    const docRef = db
      .collection(`users/${currentUser.uid}/memos`)
      .doc(this.state.key);
    docRef
      .update({
        body: this.state.body,
        created_on: newDate,
      })
      .then(() => {
        this.props.route.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          created_on: newDate,
        });
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
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
        <CircleButton onPress={this.handlePress.bind(this)}>✔︎</CircleButton>
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

export default MemoEditScreen;
