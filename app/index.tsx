import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Fragment, useRef } from 'react';
import { TrueSheet } from '@lodev09/react-native-true-sheet';

export default function HomeScreen() {
  const sheet = useRef<TrueSheet>(null);

  const present = async () => {
    await sheet.current?.present();
    console.log('Hooray! Sheet has been presented 💩');
  };

  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log('Bye bye 👋');
  };

  return (
    <Fragment>
      <View style={{ flex: 1, paddingTop: 200, alignItems: 'center', justifyContent: 'center' }}>
        <Link asChild href="/new-page">
          <Button title="Open new stack page" />
        </Link>
        <TouchableOpacity style={styles.button} onPress={present}>
          <Text style={styles.text}>Demo Sheet Footer Bug</Text>
        </TouchableOpacity>
      </View>

      <TrueSheet ref={sheet} sizes={['auto', 'large']} cornerRadius={24} FooterComponent={(
        <View style={styles.footerComponent}>
          <Text style={styles.footerComponentText}>Footer Component</Text>
        </View>
      )}>
        <View style={[styles.sheetContainer, { backgroundColor: 'white' }]}>
          <Text>Demo Sheet Footer Bug</Text>
          <TextInput style={styles.textInput} placeholder="text keyboard" />
          <TextInput style={styles.textInput} placeholder="number keyboard" keyboardType="number-pad" returnKeyType="done" />
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    marginTop: 12,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  sheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '80%',
  },
  footerComponent: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  footerComponentText: {
    color: 'white',
    textAlign: 'center',
  },
});
