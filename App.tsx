import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { runOnRuntime } from 'react-native-reanimated';
import { getWorkletRuntime, MarkdownTextInput, parseExpensiMark } from '@expensify/react-native-live-markdown';

export default function App() {
  const worklet = useCallback(() => {
    "worklet"
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MarkdownTextInput
          editable
          multiline
          parser={parseExpensiMark}
          style={styles.input}
          onChangeText={() => runOnRuntime(getWorkletRuntime(), worklet)()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    borderColor: "#555",
    borderRadius: 8,
    borderWidth: 1,
    height: 96,
    paddingHorizontal: 4,
    paddingVertical: 8,
    width: "80%",
  },
})
