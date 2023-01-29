import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setText } from 'store/features/SearchSlice';

const Input: React.FC = () => {
  const text = useAppSelector(state => state.searchText);
  const dispatch = useAppDispatch();

  const onChangeText = (_text: string) => {
    dispatch(setText(_text));
  };

  console.log(text.value);

  return (
    <View style={styles.container}>
      <TextInput
        value={text.value}
        onChangeText={onChangeText}
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
