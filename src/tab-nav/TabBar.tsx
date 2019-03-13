import React, { Component } from 'react';
import TabBarPane from './TabBarPane';
import './tabBar.css'
interface Props {
  children: JSX.Element | JSX.Element[]
}

class TabBar extends Component<Props, Object> {

  render() {
    let { children } = this.props
    return (
      <div className="m-tab">
        <div>
          {React.Children.map(children, (element:any) => {
            console.log(element)
            return <TabBarPane component={element.props.component} path={element.props.path}/>
          })}
        </div>
        <nav className="nav z-btm">
          {children}
        </nav>
      </div>
    );
  }
}

export default TabBar;