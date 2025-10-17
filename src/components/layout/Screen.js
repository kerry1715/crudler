import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export const Screen = ({ children, style }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={[styles.container, style]}>
      {children}
     <StatusBar style="light" />
    </View>
  );
};
export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
