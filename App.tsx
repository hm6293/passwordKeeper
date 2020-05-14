/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItem,
} from 'react-native';

import { ThemeProvider, ListItem, SearchBar } from 'react-native-elements';

import { Colors } from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

interface listItem {
  name: string;
}
const list: listItem[] = [
  {
    name: 'Github',
  },
  {
    name: 'Gmail',
  },
  {
    name: 'Yahoo',
  },
  {
    name: 'Blinkist',
  },
];

const keyExtractor = (item: listItem, index: number): string =>
  index.toString();

const renderItem: ListRenderItem<listItem> = ({
  item,
  index,
}): ReactElement => (
  <ListItem
    key={index}
    leftAvatar={{
      rounded: true,
      title: item.name[0],
      containerStyle: { backgroundColor: Colors.black },
    }}
    title={item.name}
    titleStyle={{ fontSize: 20 }}
    bottomDivider
    chevron={{ color: Colors.black }}
  />
);

let listToRender: listItem[] = [];

const App = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('search', search);
    listToRender = list.filter((item) => {
      console.log('item', item.name);
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log('list to render', listToRender);
  }, [search]);

  console.log('Rendering list');
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
        />
        <FlatList
          keyExtractor={keyExtractor}
          data={listToRender}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     paddingHorizontal: 24,
//     paddingVertical: 16,
//     borderBottomColor: Colors.darkGrey,
//     borderBottomWidth: 1,
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default App;
