/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import GoogleDriveFileList from './components/GoogleDriveFileList';
import store from './store';

class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <GoogleDriveFileList />
                </View>
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
