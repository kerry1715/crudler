import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <NavigationContainer>

      <Stack.Navigator 
      initalRouteName='ModuleListScreen'
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: '#fff' },
      }}
      >

        <Stack.Screen
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'List modules' }}
        />

        <Stack.Screen
          name='ModuleAddScreen'
          component={ModuleAddScreen}
          options={{ title: 'Add modules' }}
        />

        <Stack.Screen
          name='ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{ title: 'Modify modules' }}
        />

        <Stack.Screen
          name='ModuleViewScreen'
          component={ModuleViewScreen}
          options={{ title: 'View modules' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;


