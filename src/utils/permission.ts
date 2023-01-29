import { Alert, Linking, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

const IOS_PERMISSION = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
const ANDROID_PERMISSION = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

const PlatformCheck = Platform.OS === 'ios' || Platform.OS === 'android';

const PermissionPlatform = Platform.select({
  ios: IOS_PERMISSION,
  android: ANDROID_PERMISSION,
  default: IOS_PERMISSION || ANDROID_PERMISSION,
});

export const hasPermission = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };

  const checkPermission = await check(PermissionPlatform);

  if (checkPermission === RESULTS.BLOCKED) {
    Alert.alert(
      'Turn on Location Services to allow to determine your location.',
      '',
      [
        { text: 'Go to Settings', onPress: openSetting },
        { text: "Don't Use Location", onPress: () => {} },
      ],
    );
  }

  if (PlatformCheck && checkPermission === RESULTS.DENIED) {
    const permissionRequest = await request(PermissionPlatform);

    return permissionRequest === RESULTS.GRANTED;
  }

  return false;
};

export default hasPermission;
