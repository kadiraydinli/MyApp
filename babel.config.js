module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
