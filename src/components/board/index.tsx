import React, { FC, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { BoardStyles } from "./styles";
import { Tile } from "../tile";

interface BoardProps {}

type Row = "A" | "B" | "C";
type Col = "1" | "2" | "3";

export const Board: FC<BoardProps> = ({}: BoardProps) => {
  const [gameState, setGameState] = useState<"started" | "finished">("started");
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [xPositions, setXPositions] = useState<`${Row}${Col}`[]>([]);
  const [oPositions, setOPositions] = useState<`${Row}${Col}`[]>([]);

  useEffect(() => {
    checkWinner();
  }, [xPositions, oPositions]);

  const handleTilePress = (tile: `${Row}${Col}`) => {
    if (gameState === "finished") return;
    if (currentPlayer === 1) {
      setXPositions([...xPositions, tile]);
    } else {
      setOPositions([...oPositions, tile]);
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const renderTile = (poition: `${Row}${Col}`) => {
    const isX = xPositions.includes(poition);
    const isO = oPositions.includes(poition);

    let style: ViewStyle;
    switch (poition) {
      case "A1":
        style = {
          borderTopWidth: 0,
          borderLeftWidth: 0,
        };
        break;

      case "A2":
        style = {
          borderTopWidth: 0,
        };
        break;

      case "A3":
        style = {
          borderTopWidth: 0,
          borderRightWidth: 0,
        };
        break;

      case "B1":
        style = {
          borderLeftWidth: 0,
        };
        break;

      case "B3":
        style = {
          borderRightWidth: 0,
        };
        break;

      case "C1":
        style = {
          borderLeftWidth: 0,
          borderBottomWidth: 0,
        };
        break;

      case "C2":
        style = {
          borderBottomWidth: 0,
        };
        break;

      case "C3":
        style = {
          borderBottomWidth: 0,
          borderRightWidth: 0,
        };
        break;

      default:
        style = {};
    }

    if (!isX && !isO) {
      return <Tile style={style} onPress={() => handleTilePress(poition)} />;
    }
    return <Tile style={style} type={isX ? "x" : "o"} />;
  };

  const checkWinner = () => {
    const winningCombinations = [
      ["A1", "A2", "A3"],
      ["B1", "B2", "B3"],
      ["C1", "C2", "C3"],
      ["A1", "B1", "C1"],
      ["A2", "B2", "C2"],
      ["A3", "B3", "C3"],
      ["A1", "B2", "C3"],
      ["A3", "B2", "C1"],
    ];
    let xWin: boolean = false;
    let oWin: boolean = false;
    winningCombinations.forEach((combination: any) => {
      const [a, b, c] = combination;
      if (
        xPositions.includes(a) &&
        xPositions.includes(b) &&
        xPositions.includes(c)
      ) {
        xWin = true;
      }
      if (
        oPositions.includes(a) &&
        oPositions.includes(b) &&
        oPositions.includes(c)
      ) {
        oWin = true;
      }
    });
    let draw: boolean = false;
    if (xPositions.length + oPositions.length === 9 && !xWin && !oWin) {
      draw = true;
    }
    if (xWin) {
      alert("X wins!");
      setGameState("finished");
    }
    if (oWin) {
      alert("O wins!");
      setGameState("finished");
    }
    if (draw) {
      alert("Draw!");
      setGameState("finished");
    }
  };

  return (
    <View>
      <View style={BoardStyles.row}>
        {renderTile("A1")}
        {renderTile("A2")}
        {renderTile("A3")}
      </View>
      <View style={BoardStyles.row}>
        {renderTile("B1")}
        {renderTile("B2")}
        {renderTile("B3")}
      </View>
      <View style={BoardStyles.row}>
        {renderTile("C1")}
        {renderTile("C2")}
        {renderTile("C3")}
      </View>
      <TouchableOpacity
        style={BoardStyles.resetButton}
        onPress={() => {
          setGameState("started");
          setCurrentPlayer(1);
          setXPositions([]);
          setOPositions([]);
        }}
      >
        <Text style={BoardStyles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
