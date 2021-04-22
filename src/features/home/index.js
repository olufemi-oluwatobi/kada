import React, {useContext} from 'react';
import {Text, Thumbnail} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {HomeContext} from '../../main/App';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  thumbnail: {
    width: 200,
    height: 200,
  },
});

const Home = () => {
  const {thumbnail, text} = useContext(HomeContext);
  return (
    <View style={styles.wrapper}>
      <Thumbnail style={styles.thumbnail} source={{uri: thumbnail}} />
      <Text>{text}</Text>
    </View>
  );
};

export default Home;
