import { View, Text , StyleSheet , TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { TextInput } from 'react-native-web'
import { saveTask , getTask, updateTask} from '../api'


const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    tittle: '',
    description: ''
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Updating Task" });
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ tittle: task.tittle, description: task.description });
      })();
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        console.log(route.params.id, task)
        await updateTask(route.params.id, task);
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name, value) => setTask({...task, [name]: value})

  return (
    <Layout>
      <TextInput
       style={styles.input} 
        placeholder="Write a Title"
        placeholderTextColor="#546574"
        onChangeText={text => handleChange('tittle', text)}
        value={task.tittle}
      />
      <TextInput 
      style={styles.input} 
        placeholder="Write a Description"
        placeholderTextColor="#546574"
        onChangeText={text => handleChange('description', text)}
        value={task.description}
      />
      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    color: '#ffffff',
    textAlign: 'center',
    padding: 4,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
 buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  }
})

export default TaskFormScreen