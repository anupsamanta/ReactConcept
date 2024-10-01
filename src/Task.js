import React, {useState, useMemo, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
const Tasks = ({ tasks, addTask }) => {
    console.log("child rendered");
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tasks list</Text>
            {tasks.map((task, i) => (
                <Text key={i}>{task} + {i}</Text>
            ))}
            <TouchableOpacity onPress={addTask}>
              <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tasks
