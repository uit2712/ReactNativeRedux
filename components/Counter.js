import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterActions';

class Counter extends Component<Props> {

    constructor(props: Props) {
        super(props);

        // this.state = {
        //     count: 0
        // }
    }

    increment = () => {
        // this.setState({ count: this.state.count + 1 });
        this.props.increment();
    }

    decrement = () => {
        // this.setState({ count: this.state.count - 1 });
        this.props.decrement();
    }

    reset = () => {
        // this.setState({ count: 0 });
        this.props.reset();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.decrement}>
                    <Text style={[styles.text]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.text]}>{this.props.count}</Text>
                <TouchableOpacity onPress={this.increment}>
                    <Text style={[styles.text]}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.reset}>
                    <Text style={[styles.text]}>Reset</Text>
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
        count: state.counter.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);