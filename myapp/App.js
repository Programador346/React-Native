import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeSreen from "./screems/HomeSreen";
import TaskFormScreen from "./screems/TaskFormScreen"

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeSreen} 
          options={({navigation}) => ({
          title: 'Tasks App',
          headerStyle:{backgroundColor: "#222f3e"},
          headerTitleStyle:{color:'#ffffff'},
          headerRight: () =>(
            <TouchableOpacity 
              onPress={() => navigation.navigate("TaskFormScreen")}>
              <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New</Text>
            </TouchableOpacity>
          )
        })}
        />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
          options={{
            title: 'Create a Task',
            headerStyle: {
              backgroundColor: '#222f3e'
            },
            headerTitleStyle: { color: '#ffffff'},
            headerTintColor: '#ffffff'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App