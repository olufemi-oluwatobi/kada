import React from 'react';
import {Content} from 'native-base';
import {StyleSheet} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardImage,
} from 'react-native-material-cards';

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginBottom: 2,
    borderColor: 'red',
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: 300,
  },
});

export const ProductCard = ({imagePath, title, description}) => {
  return (
    <Content style={styles.wrapper}>
      <Card>
        <CardImage style={styles.image} source={{uri: imagePath}} />
        <CardTitle title={title} />
        <CardContent text={description} />
      </Card>
    </Content>
  );
};
