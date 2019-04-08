import React from 'react';
import { List, ListItem, Text, Left, Right, Body } from 'native-base';
import { Dimensions, View, ActivityIndicator, StyleSheet } from 'react-native';

var {height, width} = Dimensions.get('window');

export interface Asset {
  name: string;
  price: Array<any>;
}

export interface Props {
  loading: boolean;
  priceList: Array<Asset>;
}

export default class Markets extends React.Component<Props> {

  componentDidMount() {
    console.log(this.props.priceList);
  }

  _formatFixed(priceStr: string, decimals: number) {
    let price = Number(priceStr).toFixed(decimals);
    return price;
  }
  
  render() {
    return (
      <View>
        <List>
          {
            this.props.priceList && this.props.priceList.map((asset) => {
              return (
                <ListItem key={asset.name} >
                   <View style={styles.assetRow}>
                    <Text style={styles.assetName}>{asset.name}</Text>
                    <Body>
                    <Text style={styles.assetPrice}>{this._formatFixed(asset.price.a[0], 2)}</Text>  
                    </Body>                  
                    <Text style={styles.assetVolume}>{this._formatFixed(asset.price.v[0], 2)}</Text>
                  </View>
                </ListItem>
              );
            })
          }
        </List>
        {
          this.props.loading &&
          <View style={styles.spinnerContainer}>
            <ActivityIndicator/>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    margin: -15
  },
  listItem: {
    borderBottomWidth: 0, 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: -20,
    padding: 10,
  },
  assetName: {
    color: 'blue',
    fontSize: 14,
  },
  assetPrice: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center',
  },
  assetVolume: {
    color: 'black',
    fontSize: 14,
  },
  assetRow: {
    flexDirection: 'row',
  },
  image: {
    width: width,
    height: 300,
    resizeMode: 'cover'
  },
  spinnerContainer: {
    justifyContent: 'center',
    height: (height - 50)
  }
});