import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { TileStyles } from "./styles";

interface TileProps {
  style?: ViewStyle;
  type?: "x" | "o";
  onPress?: () => void;
}

export const Tile: FC<TileProps> = ({ style, type, onPress }) => {
  return (
    <TouchableOpacity style={[TileStyles.container, style]} onPress={onPress}>
      {type && (
        <Text style={TileStyles.text}>
          {type === "o" ? (
            <Entypo
              name="circle"
              size={TileStyles.text.fontSize - 20}
              color={"green"}
            />
          ) : (
            <Ionicons
              name="close"
              size={TileStyles.text.fontSize}
              color={"red"}
            />
          )}
        </Text>
      )}
    </TouchableOpacity>
  );
};
