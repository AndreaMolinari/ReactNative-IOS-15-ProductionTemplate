import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const DemoItem = {
  title: 'Demo',
  description: 'Demo description',
};

type DemoItemType = typeof DemoItem;

const Page: React.FC = () => {
  return (
    <ScrollView>
      <Text>Title</Text>
      {Array(100)
        .fill(DemoItem)
        .map((item: DemoItemType, index: number) => (
          <View key={index}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default Page;
