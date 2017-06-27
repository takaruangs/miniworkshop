import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import AppData from './appData';
export default class AppBody extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  getData(){
    return fetch('https://www.thewallscript.com/blogfeed/javascript/10')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson.feed.entry})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
        <AppData data={this.state.data}/>
    );
  }
}

module.export = AppBody;
