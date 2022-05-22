import React from 'react';
import {Text, TextInput, View} from 'react-native';
import useStorage from '../Hooks/storage';

const Home: React.FC = () => {
  const [nome, setNome] = useStorage('name');

  return (
    <View>
      <Text>Ciao</Text>
      <TextInput
        placeholder="Inserisci il tuo nome"
        value={nome as string}
        onChangeText={(text: string) => setNome(text)}
      />
      <Text>{nome}</Text>
    </View>
  );
};

export default Home;
