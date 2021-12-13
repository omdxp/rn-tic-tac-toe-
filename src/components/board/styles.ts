import { StyleSheet } from "react-native";

export const BoardStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  resetButton: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
  },
  resetText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  scoreView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
  },
});
