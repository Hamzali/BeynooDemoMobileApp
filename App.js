/**
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar, WebView, Text } from "react-native";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri:
              "https://hosting.backand.io/flash/flash/flashland/testpixi/index.html"
          }}
          style={{ height: 100, width: 1000 }}
        />
        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
