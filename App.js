import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TodoApp = () => {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput(""); // Clear the input field after adding
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>

      {/* Input and Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButton}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
  },
});

export default TodoApp;
