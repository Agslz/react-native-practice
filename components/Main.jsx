import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { ActivityIndicator } from "react-native";
import { Logo } from "./Logo";
import { CircleInfoIcon } from "../components/Icons";
import { styled } from "nativewind";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  const StyledPressable = styled(Pressable);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen className="bg-black">
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item }) => <GameCard game={item} />}
        />
      )}
    </Screen>
  );
}
