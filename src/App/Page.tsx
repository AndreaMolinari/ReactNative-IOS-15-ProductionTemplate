import React from 'react';
import {Text, TextInput, View} from 'react-native';
import useStorage from '../Hooks/storage';

const Page: React.FC = () => {
  const [nome, setNome] = useStorage('name');

  return (
    <View>
      <Text>Ciao</Text>
      <Text>Ciao</Text>
      <Text>Ciao</Text>
      <Text>Ciao</Text>
      <Text>Ciao</Text>
    </View>
  );
};

export default Page;