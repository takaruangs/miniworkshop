import React, {Component} from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body, Left, Thumbnail,Button,Icon} from 'native-base';
import HTMLView from 'react-native-htmlview';
export default class AppData extends Component {
  render(){

    let articles = this.props.data.map(function(articleData, index){
      return(
        <Card>
          <CardItem>
            <Left>
              <Image source={require('../img/luna2.png')} style={foottext.btnlogo} />

              <Body>
                <Text style={{color:'#000000',fontWeight:'bold'}}>{articleData.title.$t}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem content>
            <HTMLView value={articleData.content.$t}/>
          </CardItem>
          <CardItem>
            <Button transparent style={{borderTopLeftRadius:50,borderBottomLeftRadius:50,backgroundColor:'#f794a4'}}>
              <Image source={require('../img/luna.png')} style={{width:32,height:32}}/>
              <Text style={{color:'#FFFFFF'}}>  {articleData.published.$t}</Text>
            </Button>
            <Button transparent style={{borderTopRightRadius:50,borderBottomRightRadius:50,backgroundColor:'#FBB0BC'}}>
            <Image source={require('../img/c-cm.png')} style={{width:32,height:32}}/>
              <Text style={{color:'#FFFFFF',fontWeight: 'bold'}}>  {articleData.thr$total.$t}</Text>
            </Button>
          </CardItem>
        </Card>
      )
    })

    return(
      <Content>
        {articles}
      </Content>
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
    width: 50,
    height: 50,
  },

});

module.export = AppData;
