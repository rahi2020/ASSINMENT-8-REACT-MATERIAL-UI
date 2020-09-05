import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Components/Main/Main';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';




function App() {
 
  return (
    <Router>
      <Switch>
          <Route path="/main">
            <Main></Main>
          </Route>
          <Route path="/detail/:postDetail">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
