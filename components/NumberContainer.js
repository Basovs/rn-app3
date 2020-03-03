import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

const NumberContainer = props => {
  return (
    <View style={{ ...styles.numberContainer, ...props.style }}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: Colors.accent,
    padding: 10,
    marginVertical: 10
  },
  number: { fontSize: 40, fontWeight: "bold", color: Colors.accent }
})

export default NumberContainer
