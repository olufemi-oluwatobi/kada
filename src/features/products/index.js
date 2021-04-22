import React, {useEffect} from 'react';
import {Container, Header, Text} from 'native-base';
import {View, FlatList} from 'react-native';
import {ProductCard} from './components/productCard';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../products/action';

const styles = StyleSheet.create({
  loader: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  seperator: {
    width: 16,
    backgroundColor: 'pink',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});

const Product = props => {
  const {
    products,
    metadata: {isRequesting},
  } = props.productData;

  const {getProducts: fetchProducts} = props;

  useEffect(() => {
    fetchProducts({limit: 5});
  }, []);

  // Render products with FlatList and Product Card Component
  const renderProducts = () => {
    return (
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item, index}) => {
          return (
            <ProductCard
              key={`product-${index}`}
              title={item.title}
              imagePath={item.image}
              description={item.description}
            />
          );
        }}
      />
    );
  };

  const renderLoaderView = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="blue" animating={true} size={'large'} />
      </View>
    );
  };

  // Render loader view when request is requesting
  return isRequesting ? (
    renderLoaderView()
  ) : (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
      </Header>
      {renderProducts()}
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProducts}, dispatch);

const mapStateToProps = ({productData}) => ({productData});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
