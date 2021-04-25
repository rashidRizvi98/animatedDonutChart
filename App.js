import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DonutChart from "./DonutChart";

const data = [
  {
    percentage: 8,
    color: "tomato",
    max: 10,
  },
  {
    percentage: 14,
    color: "skyblue",
    max: 20,
  },
  {
    percentage: 92,
    color: "gold",
    max: 100,
  },
  {
    percentage: 240,
    color: "#222",
    max: 500,
    radius: 200,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {data.map((p, i) => {
          return (
            <DonutChart
              key={i}
              percentage={p.percentage}
              color={p.color}
              radius={p.radius}
              delay={1000}
              max={p.max}
              strokeWidth={p.strokeWidth}
            />
          );
        })}
      </View>
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
});
