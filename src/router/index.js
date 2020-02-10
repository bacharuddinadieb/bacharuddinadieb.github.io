import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import App from '../pages/main/App';
import Main from '../pages/main/Main';
import Details from '../pages/home/Details';
import Root from '../pages/root/index';
import Login from '../pages/login/index';
import NotFound from '../pages/notfound/NotFound';
import Restock from '../pages/barang/Barang';
import Pembayaran from '../pages/barang/Pembayaran';
import Kasir from '../pages/kasir/Kasir';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Root} /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Main} />
          {/*<Route exact path="/" component={() => <Redirect push to="/home" />} />*/}
          <Route exact path="/home/details" component={Details} />
          <Route exact path="/mitra" component={Main} />
          <Route exact path="/tracking" component={Main} />
          <Route exact path="/terdekat" component={Main} />
          <Route exact path="/catatan" component={Main} />
          <Route exact path="/dompet" component={Main} />
          <Route exact path="/restock" component={Restock} />
          <Route exact path="/kasir" component={Kasir} />
          <Route exact path="/pembayaran" component={Pembayaran} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
