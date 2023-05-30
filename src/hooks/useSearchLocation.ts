import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { setMapLocation } from 'store/features/MapSlice';
import { Search, setSearchLoc } from 'store/features/SearchSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

const useSearchLocation = () => {
  const searchLocations = useAppSelector(state => state.searchLocation);
  const dispatch = useAppDispatch();

  const setSearchLocation = (search: GooglePlaceDetail | null) => {
    if (search) {
      const location: Search = {
        placeID: search.place_id,
        address: search.formatted_address,
        geometry: {
          latitude: search.geometry.location.lat,
          longitude: search.geometry.location.lng,
        },
      };

      if (location.geometry) {
        dispatch(
          setMapLocation({
            ...location.geometry,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }),
        );
      }

      dispatch(setSearchLoc(location));
    }
  };

  return { searchLocations, setSearchLocation };
};

export default useSearchLocation;
