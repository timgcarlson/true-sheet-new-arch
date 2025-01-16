import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { Fragment, useRef } from 'react';

export default function TabTwoScreen() {
  const sheet = useRef<TrueSheet>(null);
  const sheet2 = useRef<TrueSheet>(null);
  const sheet3 = useRef<TrueSheet>(null);

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present();
    console.log('Hooray! Sheet has been presented 💩');
  };

  const present2 = async () => {
    await sheet2.current?.present();
    console.log('Hooray! Sheet2 has been presented 💩');
  };

  const present3 = async () => {
    await sheet3.current?.present();
    console.log('Hooray! Sheet3 has been presented 💩');
  };

  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log('Bye bye 👋');
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={present}>
          <Text style={styles.text}>Present True Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={present2}>
          <Text style={styles.text}>Present True Sheet 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={present3}>
          <Text style={styles.text}>Present True Sheet 3</Text>
        </TouchableOpacity>
      </View>
      <TrueSheet ref={sheet} sizes={['auto', 'large']} cornerRadius={24}>
        <View style={[styles.sheetContainer, { backgroundColor: 'red' }]}>
          <Text>Sheet 1</Text>
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
      <TrueSheet ref={sheet2} sizes={['auto', 'large']} cornerRadius={24}>
        <View style={[styles.sheetContainer, { backgroundColor: 'green' }]}>
          <Text>Sheet 2</Text>
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
      <TrueSheet ref={sheet3} sizes={['auto', 'large']} cornerRadius={24}>
        <View style={[styles.sheetContainer, { backgroundColor: 'blue' }]}>
          <Text>Sheet 3</Text>
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  sheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  button1: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: 'gray',
  },
});