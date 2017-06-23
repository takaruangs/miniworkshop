import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import Enemy from './iz/Enemy';

export default class IzMinigame extends Component {

  constructor(props){
    super(props);
    this.state ={
      movePlayerVal: new Animated.Value(40),
      playerSide: 'left',
      points: 0,
      maxscore: 0,

      moveEnemyval: new Animated.Value(0),
      enemyStartposX: 0,
      enemySide: 'left',
      enemySpeed: 4000,

      gameOver: false,
    };

  }

  render() {
    return (
        <Image source={require('./src/background.png')} style={styles.container}>

        <View style={{ flex:1,alignItems:'center',marginTop:80}}>
            <View style={styles.points}>
              <Text onPress={ ()=>this.newgame()} style={styles.pointstext}>{this.state.points}</Text>
            </View>
            <View style={styles.maxpoints}>
              <Text style={styles.maxtext}> Maxscore : {this.state.maxscore}</Text>
            </View>
        </View>

          <Animated.Image source={require('./src/mainchar.png')}
          style={{
              height: 100,
              width: 80,
              position: 'absolute',
              zIndex: 1,
              bottom: 50,
              resizeMode: 'stretch',
              transform: [
                { translateX: this.state.movePlayerVal}
              ]
          }}>
          </Animated.Image>

          <Enemy enemyImg={require('./src/enemy.png')}
          enemyStartposX={this.state.enemyStartposX}
          moveEnemyval={this.state.moveEnemyval} />

          <View style={styles.controls}>
            <Text style={{flex:1,}}> </Text>
            <Text style={styles.left} onPress={ () => this.movePlayer('left')}> {'< < < '} </Text>
            <Text style={{flex:1,}}> </Text>
            <Text style={styles.right} onPress={ () => this.movePlayer('right')}> {'> > >'} </Text>
            <Text style={{flex:1,}}> </Text>
          </View>

        </Image>
    );
  }

  movePlayer(direction) {
    if(direction == 'right'){
      this.setState({ playerSide: 'right'});

      Animated.spring(
        this.state.movePlayerVal,
        {
          toValue: Dimensions.get('window').width - 140,
          tension: 520,
        }
      ).start();

    } else if (direction == 'left') {
      this.setState({ playerSide: 'left'});

      Animated.spring(
        this.state.movePlayerVal,
        {
          toValue: 40,
          tension: 520,
        }
      ).start();

    }
  }

  componentDidMount(){
    this.animateEnemy();
  }
  animateEnemy(){
    this.state.moveEnemyval.setValue(-100);
    var windowH = Dimensions.get('window').height;

    var r = Math.floor(Math.random()*2)+1;

    if (r==2){
      r=40;
      this.setState({ enemySide: 'left'});
    } else {
      r = Dimensions.get('window').width-140;
      this.setState({ enemySide:'right'});
    }
    this.setState({enemyStartposX:r});

    var refreshIntervalId;
    refreshIntervalId = setInterval( () => {
      if(this.state.moveEnemyval._value>windowH-280
       && this.state.moveEnemyval._value<windowH-180
       && this.state.playerSide == this.state.enemySide) {
         clearInterval(refreshIntervalId)
         this.setState({ gameOver: true});
         this.gameOver();
       }
    },50);

    setInterval( ()=> {
      this.setState({ enemySpeed: this.state.enemySpeed - 15 })
    }, 5000);

    Animated.timing(
      this.state.moveEnemyval,
      {
        toValue: Dimensions.get('window').height,
        duration: this.state.enemySpeed,
      }
    ).start(event =>{
      if (event.finished && this.state.gameOver == false){
        clearInterval(refreshIntervalId);
        this.setState({ points: ++this.state.points });
        this.animateEnemy();
      }
    });
  }

  gameOver(){
    if(this.state.points>this.state.maxscore){
      this.setState({ maxscore: this.state.points});
    }else {
      this.setState({ maxscore: this.state.maxscore});
    }
    this.setState({ points: 'RETURN'}),

    alert(
      'Game Over',
    );
  }

  newgame(){
      this.setState({ enemySpeed: 4000});
      this.setState({ points: 0});
      this.setState({ gameOver: false});
      this.animateEnemy();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
      resizeMode: 'stretch',
  },
  points:{
    width: 250,
    height: 70,
    backgroundColor: '#7DE',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  pointstext:{
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFF',
  },
  maxpoints:{
    width: 250,
    height: 50,
    backgroundColor: '#6CD',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maxtext:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    flex: 3,
    color: '#7DE',
    margin: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderRadius: 200,
  },
  right: {
    flex: 3,
    color: '#7DE',
    margin: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderRadius: 200,
  }
});

AppRegistry.registerComponent('IzMinigame', () => IzMinigame);
