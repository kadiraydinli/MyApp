import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import useSearchLocation from 'hooks/useSearchLocation';

const Input: React.FC = () => {
  const { setSearchLocation } = useSearchLocation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        textInputProps={{
          placeholderTextColor: 'gray',
        }}
        styles={{ textInput: { marginBottom: 0 } }}
        fetchDetails
        enablePoweredByContainer={false}
        onPress={(_, details = null) => {
          setSearchLocation(details);
        }}
        query={{
          key: Config.GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
