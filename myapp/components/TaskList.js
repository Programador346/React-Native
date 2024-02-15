import { View, Text , FlatList} from 'react-native'
import React, {useState, useEffect}from 'react'
import { deleteTask, getTasks, setTasks } from "../api";
import TaskItem from './TaskItem'
import { useIsFocused } from "@react-navigation/native";
import { RefreshControl} from 'react-native-web'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const getUsers = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTasks = async () =>{
    const data = await getTask()
    console.log('loaded')
    setTasks(data)
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await getUsers();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getUsers();
    console.log("called");
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id)
    onRefresh()
    await loadTasks()
  }

  const renderItem = ({item}) => {
    return <TaskItem task={item} handleDelete={handleDelete}/>;
  }

  return (
    <FlatList
    style={{width: '100%'}}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
          />
        }
      />
  )
}

export default TaskList