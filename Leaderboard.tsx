import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Alice", score: 100 },
    { id: "2", name: "Bob", score: 90 },
    { id: "3", name: "Charlie", score: 80 },
  ]);

// Helper function to sort users by score in descending order
  const sortUsersByScore = (usersArray: typeof users) => {
    // Use spread operator to create a copy of the array before sorting and sort with correct logic
    return [...usersArray].sort((a, b) => b.score - a.score);
  };

  const sortLeaderboard = () => {
    const sortedUsers = sortUsersByScore(users); // Call the sort function
    setUsers(sortedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>
              {item.name}: {item.score}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Sort Leaderboard" onPress={sortLeaderboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Leaderboard;
