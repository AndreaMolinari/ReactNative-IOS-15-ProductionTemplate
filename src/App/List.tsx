import React from 'react';
import {Text, View} from 'react-native';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Style from './Style';

type DataType = {
  id: string;
  title: string;
  link?: string;
};

const DATA: DataType[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    link: 'link',
  },
];

const Item: React.FC<DataType> = ({id, title, link = false}) => {
  return (
    <>
      {link ? (
        <TouchableOpacity style={Style.listItem} onPress={() => false}>
          <Text style={Style.text}>{title}</Text>
          <Text> &gt; </Text>
        </TouchableOpacity>
      ) : (
        <View style={Style.listItem}>
          <Text style={Style.text}>{title}</Text>
        </View>
      )}
    </>
  );
};

const List: React.FC<DataType> = () => {
  const renderItem = ({item}) => <Item {...item} />;

  return (
    <ScrollView>
      {Array(4)
        .fill(1)
        .map((_, index) => (
          <View key={index}>
            <Text style={Style.subhead}>Section Heading</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              scrollEnabled={false}
              keyExtractor={item => item.id}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default List;
