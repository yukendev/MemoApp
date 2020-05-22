import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  };

  UNSAFE_componentWillMount() {
    const currentUser = this.props.route.params.currentUser;
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).onSnapshot((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
        memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList: memoList });
    });
    // .get()
    // .then((snapshot) => {
    // const memoList = [];
    // snapshot.forEach((doc) => {
    //   memoList.push({ ...doc.data(), key: doc.id });
    //   });
    //   this.setState({ memoList: memoList });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  handlePress() {
    this.props.navigation.navigate("MemoCreate", {
      currentUser: this.props.route.params.currentUser,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
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
