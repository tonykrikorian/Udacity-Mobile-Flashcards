import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./components/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(reducer, middleware);

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
