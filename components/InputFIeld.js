import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputFIeld = (props) => {
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.item}>
      <View style={styles.view_textinput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={props.name}
          placeholderTextColor="#a8adaa"
          selectionColor="orange"
          editable={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    label: "Gourab",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#4d4647"
  },
  view_textinput: {
    width: "100%",
  },
  input: {
    fontSize: 28,
    color: "red",
    textAlign: "center"
  },
});

export default InputFIeld;
