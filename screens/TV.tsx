import React from "react";
import { View, Text, RefreshControl } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { tvApi } from "../api";
import Loader from "../components/Loader";
import VMedia from "../components/VMedia";
import HList from "../components/HList";

const TV = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: todayLoading,
    data: todayData,
    isFetching: todayRefetching,
  } = useQuery(["tv", "today"], tvApi.airingToday);
  const {
    isLoading: topLoading,
    data: topData,
    isFetching: topRefetching,
  } = useQuery(["tv", "top"], tvApi.topRated);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isFetching: trendingRefetching,
  } = useQuery(["tv", "trending"], tvApi.trending);

  const onRefresh = () => {
    queryClient.refetchQueries(["tv"]);
  };
  const loading = todayLoading || topLoading || trendingLoading;
  const refreshing = todayRefetching || topRefetching || trendingRefetching;
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending TV" data={trendingData.results} />
      <HList title="Airing Today" data={todayData.results} />
      <HList title="Top Rated TV" data={topData.results} />
    </ScrollView>
  );
};

export default TV;
