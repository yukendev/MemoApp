import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CircleButton from "../elements/CircleButton";

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  };

  UNSAFE_componentWillMount() {
    const memo = this.props.route.params.memo;
    this.setState({ memo: memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  dateString(date) {
    if (date == null) {
      return "";
    }
    const dateObject = date.toDate();

    return dateObject.toISOString().split("T")[0];
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>
                {memo.body.substring(0, 10)}
              </Text>
              <Text style={styles.memoHeaderDate}>
                {this.dateString(memo.created_on)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContents}>
          <Text style={styles.memoBody}>{memo.body}</Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() =>
            this.props.navigation.navigate("MemoEdit", {
              memo: memo,
              returnMemo: this.returnMemo.bind(this),
            })
          }
        >
          ✒︎
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 20,
  },
  editButton: {
    top: 75,
  },
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
});

export default MemoDetailScreen;
