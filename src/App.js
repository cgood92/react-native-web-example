import React from 'react';
import {View, Text} from 'react-native';
import {Button, Provider, Toast} from '@ant-design/react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import TextArea from './textarea';

export default function App() {
  return (
    <Provider>
      <NativeRouter>
        <Switch>
          <Route path="/help">Help!</Route>
          <Route path="/">
            <View>
              <Text>Hello world!</Text>
              <Button
                onPress={() => Toast.info('Button was clicked!')}
                style={{flex: 1}}
                type="primary">
                This is a button
              </Button>
              <TextArea />
            </View>
          </Route>
        </Switch>
      </NativeRouter>
    </Provider>
  );
}
