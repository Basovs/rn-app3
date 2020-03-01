import React from "react"
import { View, StyleSheet, TextInput } from "react-native"

import Colors from "../constants/colors"

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderColor: "black",
    paddingVertical: 10,
    marginVertical: 20,
    width: "100%"
  }
})

export default Input
