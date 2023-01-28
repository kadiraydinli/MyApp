import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from './Input';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const insetsTop = useSafeAreaInsets().top;

  return (
    <View style={[styles.container, { top: insetsTop }]}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    padding: 12,
  },
});

export default Header;
