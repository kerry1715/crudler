import { StyleSheet, Text } from 'react-native';
import Screen from "../layout/Screen";

export const ModuleListScreen = () => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Screen style={styles.container}>
      <Text>List</Text>
    </Screen>
  );
};
export default ModuleListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
