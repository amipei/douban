import React, { Component } from 'react';
import './App.css';
import { Route, Switch, HashRouter, Redirect, Link } from "react-router-dom";
import List from './List/List';
import ListItem from './List/ListItem';
import TabBar from './tab-nav/TabBar';
import TabBarItem from './tab-nav/TabBarItem';
import { FaBook, FaItunesNote, FaFilm } from 'react-icons/fa';

const A: React.SFC = () => {
  return <h1>2222</h1>
}
const B: React.SFC = () => {
  return <h1>2333</h1>
}
const C: React.SFC = () => {
  return <h1>2444</h1>
}
let cc = [
  { o: 1 },
  { o: 2 },
  { o: 4 },
  { o: 5 },
]
const D: React.SFC = () => {
  return <List dataSource={cc} renderItem={(element, index) => {
    return <ListItem key={index} index={index}>
      <Link to={`/book/${index}`}>
        {element.o}
      </Link>
    </ListItem>
  }} />
}
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path="/" render={() => (
              <div>
                <TabBar>
                  <TabBarItem title="图书" path="/book" component={A} icon={FaBook} />
                  <TabBarItem title="电影" path="/movie" component={B} icon={FaItunesNote}/>
                  <TabBarItem title="音乐" path="/music" component={C} icon={FaFilm}/>
                </TabBar>
              </div>
            )} />
            <Route path="/book/:index" component={A} />
            <Route path="/movie/:index" component={B} />
            <Route path="/music/:index" component={C} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
