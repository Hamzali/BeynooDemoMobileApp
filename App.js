/**
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  WebView,
  TextInput,
  Button,
  Alert,
  BackHandler
} from "react-native";

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isWebViewOpen: false,
      testUri: ""
    };

    BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.state.isWebViewOpen) {
        this.setState({ isWebViewOpen: false });
        return true;
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.state.isWebViewOpen ? (
          <View style={{ padding: 10 }}>
            <TextInput
              style={{ fontSize: 18, marginBottom: 10 }}
              placeholder={"URI/Link "}
              value={this.state.testUri}
              onChangeText={text => this.setState({ testUri: text })}
            />
            <Button
              style={{ fontSize: 20 }}
              title={"test game"}
              onPress={() => {
                if (this.state.testUri.length == 0) {
                  return Alert.alert("Don't leave uri field empty!");
                }

                this.setState({ isWebViewOpen: true });
              }}
            />
          </View>
        ) : (
          <WebView
            source={{
              uri: this.state.testUri
            }}
            style={{ height: 100, width: 1000 }}
            onMessage={event => {
              const { data } = event.nativeEvent;
              Alert.alert(data);
            }}
          />
        )}
        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
