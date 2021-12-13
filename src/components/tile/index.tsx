import React, { FC } from "react";
import { Text, View, ViewStyle } from "react-native";

import { TileStyles } from "./styles";

interface TileProps {
  style?: ViewStyle;

  type?: "x" | "o";
}

export const Tile: FC<TileProps> = ({ style, type }) => {
  return (
    <View style={[TileStyles.container, style]}>
      {type && <Text style={TileStyles.text}>{type}</Text>}
    </View>
  );
};
