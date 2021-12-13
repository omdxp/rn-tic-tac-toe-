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
      {type && <Text style={TileStyles.text}>{type}</Text>}
    </TouchableOpacity>
  );
};
