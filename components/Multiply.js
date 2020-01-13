import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { doubleNumber, tripleNumber } from '../actions/multiplyActions';
import { connect } from 'react-redux';

class Multiply extends Component<Props> {

    doubleNumber = () => {
        this.props.doubleNumber();
    }

    tripleNumber = () => {
        this.props.tripleNumber();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text]}>Result: {this.props.result}</Text>
                <TouchableOpacity onPress={this.doubleNumber}>
                    <Text style={[styles.text]}>Double number</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.tripleNumber}>
                    <Text style={[styles.text]}>Triple number</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
});

// map state from store to props and a function named 'dispatch'
const mapStateToProps = (state) => {
    return {
        result: state.multiply.result
    };
};

const mapDispatchToProps = {
    doubleNumber,
    tripleNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);