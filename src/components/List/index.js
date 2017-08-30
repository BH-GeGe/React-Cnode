import React from 'react'
import { ListView } from 'antd-mobile';
import ListItem from '../ListItem';

const MyBody = (props) => (
  <div>{props.children}</div>
);

class List extends React.Component {
  constructor (props) {
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([2,3,4, 5, 6, 7, 9, 10])
    }
  }

  loadMore = () => {
    console.log('trigger');
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize={10}
        pageSize={10}
        onEndReachedThreshold={10}
        scrollEventThrottle={200}
        renderBodyComponent={() => <MyBody />}
        onEndReached={this.loadMore}
        renderRow={() => <ListItem />}
        style={{
          height: `${(document.body.clientHeight || document.documentElement.clientHeight) - 87}px`
        }}
      />
    );
  };
}

export default List;