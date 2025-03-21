import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, InputAccessoryView } from 'react-native';
import { Fragment, useRef } from 'react';
import { TrueSheet } from '@lodev09/react-native-true-sheet';

export default function HomeScreen() {
  const sheetRef = useRef<TrueSheet>(null);

  const present = async () => {
    await sheetRef.current?.present();
    console.log('Sheet presented');
  };

  const dismiss = async () => {
    await sheetRef.current?.dismiss();
    console.log('Sheet dismissed');
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={present}>
          <Text style={styles.buttonText}>Demo Footer Bounce Bug</Text>
        </TouchableOpacity>
      </View>

      <TrueSheet
        ref={sheetRef}
        cornerRadius={24}
        FooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>Footer Component</Text>
          </View>
        }
      >
        <View style={styles.sheetContent}>
          {/* Fixed header content */}
          <View style={styles.header}>
            <Text style={styles.title}>Demo Footer Bounce Bug</Text>
            <TouchableOpacity onPress={dismiss}>
              <Text style={styles.dismissText}>Dismiss Sheet</Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable content */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sectionTitle}>Standard Keyboard Inputs</Text>
            <TextInput style={styles.input} placeholder="Text input 1" />
            <TextInput style={styles.input} placeholder="Text input 2" />

            <Text style={styles.sectionTitle}>Number Pad Inputs</Text>
            <TextInput
              style={styles.input}
              placeholder="Number input 1"
              keyboardType="number-pad"
              returnKeyType="done"
            />
            <TextInput
              style={styles.input}
              placeholder="Number input 2"
              keyboardType="number-pad"
              returnKeyType="done"
            />
            <TextInput
              style={styles.input}
              placeholder="Number input w/o done button"
              keyboardType="number-pad"
            />

            <Text style={styles.description}>
              With the software keyboard open, switch focus between text and number inputs.
              You'll see the FooterComponent bounce or shift slightly as the layout recalculates,
              even though the keyboard heights (including InputAccessoryViews) are the same.
              {`\n\n`}
              The issue does not occur when switching focus between inputs with the same keyboard type.
            </Text>
          </ScrollView>
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
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  footer: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
  sheetContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dismissText: {
    color: 'blue',
    marginTop: 8,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 60,
    marginBottom: 16,
    gap: 12,
  },
  sectionTitle: {
    fontWeight: '600',
    marginTop: 16,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '80%',
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    color: '#333',
  },
});