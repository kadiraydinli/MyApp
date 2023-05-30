import { Alert } from 'react-native';
import { LatLng } from 'react-native-maps/lib/sharedTypes';
import Geolocation, { PositionError } from 'react-native-geolocation-service';
import { useAppDispatch, useAppSelector } from 'store/store';
import hasPermission from 'utils/permission';
import { setLocation } from 'store/features/GeolocationSlice';
import { setMapLocation } from 'store/features/MapSlice';

const useGeolocation = () => {
  const location = useAppSelector(state => state.myLocation);
  const dispatch = useAppDispatch();

  const updateGeolocation = (position: Geolocation.GeoPosition) => {
    const region: LatLng = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    dispatch(
      setMapLocation({
        ...region,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }),
    );

    dispatch(setLocation(region));
  };

  const fetchCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      updateGeolocation,
      error => {
        if (error.code === PositionError.PERMISSION_DENIED) {
          hasPermission();
        } else {
          Alert.alert(error.message.toString());
        }
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return { location, fetchCurrentPosition };
};

export default useGeolocation;
