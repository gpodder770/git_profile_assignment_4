// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import InputFIeld from "./components/InputFIeld";
import PageHeading from "./components/PageHeading";

export default function Signup() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.item_input}>
          <PageHeading text={"Bio"} />
          <Text style="styles.label" text=""></Text>
          <InputFIeld name={"Gourab Ranjan Podder"} />
          <InputFIeld name={"Gourab"} />
          <InputFIeld name={"Enter your Contact Number"} />
          <InputFIeld name={"Interests"} />
          <InputFIeld name={"Skills"} />

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  item_input: {
    width: 300
  }
});
