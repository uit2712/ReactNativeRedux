/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';
import Multiply from './components/Multiply';
import GoogleDriveFilesList from './components/GoogleDriveFilesList';

class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Counter/>
                <Multiply/>
                <GoogleDriveFilesList/>
            </Provider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default App;
