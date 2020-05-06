import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/es/components/UIShell';
import AuthoringHeader from './components/AuthoringHeader';

import { Route, Switch } from 'react-router-dom';
import SubjectsPage from './content/SubjectsPage';
import ItemsPage from './content/ItemsPage';
import AuthoringSidenav from './components/AuthoringSidenav';

class App extends Component {
  render() {
    return (
      <>
        <AuthoringHeader />
        <AuthoringSidenav />
        <Content>
          <Switch>
            <Route exact path="/" component={SubjectsPage} />
            <Route path="/items" component={ItemsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
