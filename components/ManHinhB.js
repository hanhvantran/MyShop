import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';

export default class ManhinhB extends React.Component {
    render() {
        return (
            <View>
                <Text>Man Hinh B</Text>
                <TouchableOpacity>
                    <Text>Man Hinh A</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const style= StyleSheet.create(
    {
        hanh:{
            flex: 1,
            justifyContent: 'center',
        }
    }
);
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MyClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyClass;
