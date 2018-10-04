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