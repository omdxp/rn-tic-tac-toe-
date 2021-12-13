import React, { FC } from "react";
import { Text, View, ViewStyle } from "react-native";

import { TileStyles } from "./styles";

interface TileProps {
  style?: ViewStyle;
}

export const Tile: FC<TileProps> = ({ style }) => {
  return <View style={[TileStyles.container, style]}></View>;
};
