import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

class CircleButton extends React.Component {
  render() {
    const { style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      <TouchableHighlight
        style={[styles.CircleButton, style, { backgroundColor: bgColor }]}
      >
        <Text
          style={[styles.CircleButtonTitle, { color: textColor }]}
          onPress={onPress}
        >
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  CircleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
