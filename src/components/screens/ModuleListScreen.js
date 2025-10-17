import Screen from "../layout/Screen";
import { Pressable, StyleSheet } from "react-native";
import {modules as initialModules} from '../../data/modules';
import { ScrollView, View } from 'react-native-web';

export const ModuleListScreen = () => {
  // Initialisations ---------------------
  const modules = initialModules;
  // State -------------------------------
  // Handlers ----------------------------
  const handleSelect = () => alert('Item selected');
  // View --------------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
      {
        modules.map((module) => {
          return (
            <Pressable onPress={handleSelect}>
              <View style={styles.item}>
                <text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </text>
              </View>
            </Pressable>
          );
        })
      }
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
  },
});
export default ModuleListScreen;
