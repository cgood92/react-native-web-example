import React from 'react';
import {View, Text} from 'react-native';
import {Button, Provider, Toast} from '@ant-design/react-native';

export default function App() {
  return (
    <Provider>
      <View>
        <Text>Hello world!</Text>
        <Button
          onPress={() => Toast.info('Button was clicked!')}
          style={{flex: 1}}
          type="primary">
          This is a button
        </Button>
      </View>
    </Provider>
  );
}
