import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import Registration from './Pages/Athuntication/Registration/Registration';
import SignIn from './Pages/Athuntication/SignIn/SignIn';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFoundPage from './Pages/Shared/NotFoundPage/NotFoundPage';
import Product from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Athuntication/PrivateRoute/PrivateRoute';
import DashboardAdmin from './Pages/Dashboard/AdminDashBoard/DashboardAdmin/DashboardAdmin';
import AdminRoute from './Pages/Athuntication/AdminRoute/AdminRoute';
import DashboardClient from './Pages/Dashboard/ClientDashBoard/DashboardHomeClient/DashboardClient';

const App = () => {
  return (
    <><AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Registration} />
          <Route path="/myorder" component={MyOrder} />
          <PrivateRoute path="/details/:productId" >
            <ProductDetails />
          </PrivateRoute>
          <PrivateRoute path="/dashboard" >
            <DashboardClient />
          </PrivateRoute>
          <AdminRoute path="/dashboardAdmin" >
            <DashboardAdmin />
          </AdminRoute>
          <Route path="/*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
    </>
  );
};

export default App;