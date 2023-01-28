import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Search"
        style={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  inputContainer: {
    flex: 1,
  },
});

export default Input;
