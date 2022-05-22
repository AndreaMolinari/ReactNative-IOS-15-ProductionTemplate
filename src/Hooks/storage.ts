import {
  MMKVInstance,
  MMKVLoader,
  useMMKVStorage,
} from 'react-native-mmkv-storage';

const MMKV: MMKVInstance = new MMKVLoader().initialize();
type LiteralUnion<T extends U, U = string> = T | (U & {});

function useStorage(
  key: LiteralUnion<'user' | 'password'>,
  defaultValue?: string,
) {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  return [value, setValue];
}

export default useStorage;
