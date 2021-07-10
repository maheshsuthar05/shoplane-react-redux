import React, { useEffect, Component } from 'react';
import Home from './Components/home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Product from './Components/product';
import Checkout from './Components/checkout';
import Confirmation from './Components/confirmation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return (<>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product/:productId' component={Product} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/confirmation' component={Confirmation} />
        </Switch>
      </BrowserRouter>
    </>);
  }
}
 
export default App;

