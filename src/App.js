import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import PrivateRoute from './Pages/Athuntication/PrivateRoute/PrivateRoute';
import Registration from './Pages/Athuntication/Registration/Registration';
import SignIn from './Pages/Athuntication/SignIn/SignIn';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/DashboardHome/DashboardHome';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import Product from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';



const App = () => {
  return (
    <><AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Registration} />
          <Route path="/myorder" component={MyOrder} />
          <Route path="/details/:productId" component={ProductDetails} />
          <Route path="/addproduct" component={AddProduct} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
    </>
  );
};

export default App;