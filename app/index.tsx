import { StyleSheet, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 200, alignItems: 'center', justifyContent: 'center' }}>
      <Link asChild href="/new-page">
        <Button title="Open new stack page" />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
