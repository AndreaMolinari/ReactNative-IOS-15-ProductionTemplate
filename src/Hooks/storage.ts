import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

function useStorage(key: string, defaultValue?: any) {
  const [storageValue, updateStorageValue] = React.useState(defaultValue);

  React.useEffect(() => {
    getStorageValue();
  }, []);

  async function getStorageValue() {
    let value = defaultValue;
    try {
      value = (await AsyncStorage.getItem(key)) || defaultValue;
    } catch (e) {
      // handle here
    } finally {
      updateStorageValue(value);
    }
  }

  async function updateStorage(newValue: any) {
    try {
      await AsyncStorage.setItem(key, newValue);
    } catch (e) {
      // handle here
    } finally {
      getStorageValue();
    }
  }

  return [storageValue, updateStorage];
}

export default useStorage;
