import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity, StyleSheet, Platform, Dimensions, Button } from 'react-native';

export default class ManhinhA extends React.Component 
{
    getMoviesFromApiAsync() 
    {
        return fetch("http://10.170.215.131:64829/api/getDanhSachDonViQuanLy")
          .then((response) => response.json())
          .then((responseJson) => 
          {
           console.log(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['Tran van Hanh', 'Ha thi Thuy'])
        };
    }
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Go to Jane's profile"
                    // onPress={() =>
                    //     navigate('ManHinhB', { name: 'Jane' })
                    // }
                    onPress={this.getMoviesFromApiAsync.bind()}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={{ padding:20, borderWidth:1  }}><Text>{rowData}</Text></View>
                }
                />
            </View>
        );
    }
    componentDidMount(){

    }

}