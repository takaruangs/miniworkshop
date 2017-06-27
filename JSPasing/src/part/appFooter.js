import React, {Component} from 'react';
import {Text, Image, StyleSheet,} from 'react-native';
import {Footer, FooterTab, Button, Icon,} from 'native-base';

export default class AppFooter extends Component {

  render(){
    return (
              <Footer style={{height:130}}>
                <FooterTab style={{backgroundColor:'#FBB0BC', height:140}}>
                  <Button style={{height:200}}>
                    <Image source={require('../img/home.png')} style={foottext.btnlogo}/>
                    <Text style={foottext.text}>HOME</Text>
                  </Button>
                  <Button style={{height:200,backgroundColor:'#f794a4'}}>
                    <Image source={require('../img/list.png')} style={foottext.btnlogo}/>
                    <Text style={foottext.text}>LIST</Text>
                  </Button>
                  <Button style={{height:200}}>
                    <Image source={require('../img/page.png')} style={foottext.btnlogo }/>
                    <Text style={foottext.text}>PAGE</Text>
                  </Button>
                </FooterTab>
              </Footer>
    );
  }
}
const foottext = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  btnlogo:{
    width: 100,
    height: 100,
  },

});
module.export = AppFooter;
