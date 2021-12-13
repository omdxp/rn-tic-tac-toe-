import React, { FC } from "react";
import { Text, View } from "react-native";

import { BoardStyles } from "./styles";
import { Tile } from "../tile";

interface BoardProps {}

export const Board: FC<BoardProps> = ({}: BoardProps) => {
  return (
    <View>
      <View style={BoardStyles.row}>
        <Tile
          style={{
            borderLeftWidth: 0,
            borderTopWidth: 0,
          }}
          type="x"
        />
        <Tile
          style={{
            borderTopWidth: 0,
          }}
          type="o"
        />
        <Tile
          style={{
            borderTopWidth: 0,
            borderRightWidth: 0,
          }}
        />
      </View>
      <View style={BoardStyles.row}>
        <Tile
          style={{
            borderLeftWidth: 0,
          }}
        />
        <Tile />
        <Tile
          style={{
            borderRightWidth: 0,
          }}
        />
      </View>
      <View style={BoardStyles.row}>
        <Tile
          style={{
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          }}
        />
        <Tile
          style={{
            borderBottomWidth: 0,
          }}
        />
        <Tile
          style={{
            borderBottomWidth: 0,
            borderRightWidth: 0,
          }}
        />
      </View>
    </View>
  );
};
