import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import MainPage from './MainPage/MainPage'
import SecondPage from './SecondPage/SecondPage'
import ThirdPage from './ThirdPage/ThirdPage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/second" component={SecondPage} />
          <Route exact path="/third" component={ThirdPage} />
        </Switch>
      </Layout>
      </BrowserRouter>
    )
  }
}

export default App;