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
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFoundPage from './Pages/Shared/NotFoundPage/NotFoundPage';
import Product from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import DashboardAdmin from './Pages/Dashboard/AdminDashBoard/DashboardHome/DashboardHome';
import DashboardClient from './Pages/Dashboard/ClientDashBoard/DashboardHomeClient/DashboardHomeClient';



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
          <PrivateRoute path="/dashboardAdmin" component={DashboardAdmin} />
          <PrivateRoute path="/dashboard" component={DashboardClient} />
          <PrivateRoute path="/*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
    </>
  );
};

export default App;