import React, { Component } from 'react';

import './style.css'

interface Props {
  dataSource: Array<object>
  renderItem: (element: any, index: number) => any
}
class List extends Component<Props, object> {
  render() {
    let { dataSource, renderItem } = this.props
    return (
      <ul className="list">
        {dataSource.map((element, index) => {
          return renderItem(element, index)
        })}
      </ul>
    );
  }
}

export default List;