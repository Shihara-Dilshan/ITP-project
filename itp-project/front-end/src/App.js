import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp/SignUp";
import Login from "./components/User/Login/Login";
import UserProfile from "./components/User/UserProfile/UserProfile";
import confirmEmail from "./components/User/UserProfile/confirmEmail";
import PurchaseContainer from "./components/User/userPurchase/PurchaseContainer";
import OnlineStore from "./components/OnlineStore/OnlineStore";
import Buy from "./components/Buy/Buy";
import IButton from "./components/Home/IButton";
import ServiceHome from "./components/Service/ServiceHome";
import RequestDelivery from "./components/Delivery/RequestingDelivery/RequestDelivery";
import Update from "./components/User/UserProfile/Update";
import ForgetPassword from './components/User/ForgetPassword/ForgetPassword';
import GetRecoverCode from './components/User/ForgetPassword/GetRecoverCode';
import Logout from './components/User/Logout/Logout';
import ChangePassword from './components/User/ForgetPassword/ChangePassword';
import RequestDesign from './components/Service/Design/RequestDesign';
import PaymentInfo from './components/Service/Design/PaymentInfo';
import RequestRepair from './components/Service/Repair/RequestRepair';
import PurchuseTable from './components/User/userPurchase/PurchuseTable';
import DesignTable from './components/User/userPurchase/DesignTable';
import DeliveryRequestsFromCustomer from './components/Delivery/DeliveryRequestAdminView/DeliveryRequestsFromCustomer';
import AssignDriver from './components/Delivery/AssignDriver/AssignDriver';
import DeliveredItems from './components/Delivery/DeliveredItems/DeliveredItems';
import DeliveryCancellRequest from './components/Delivery/DeliverCancelRequest/DeliveryCancellRequest';
import DeliveryDriver from './components/Delivery/DeliveryDriver/DeliveryDriver';
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import DashBoard from "./components/Admin/DashBoard/DashBoard";
import Rentjewelries from "./components/Rent/Rhome/Rentcollection";
import Rentpay from "./components/Rent/RentPayment/RentPayForm";
import rentStauts from "./components/Rent/UpdateR-Status/updateRentStatus";
import mainfirstPage from "./components/Rent/rentHome/mainfirstPage";
import earstuds from "./components/Rent/rentHome2/mainEarrings";
import totPayone from "./components/Rent/TotalPay/totalpayment1";
import myrentals from "./components/Rent/Myrentals/userRentals";
import updatetable from "./components/Rent/updateTable/u_table";
import myRreport from "./components/Rent/MonthlyRentals/Report";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <IButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/confirmEmail" exact component={confirmEmail} />
          <Route path="/myDetails" exact component={PurchaseContainer} />
          <Route path="/onlinestore" exact component={OnlineStore} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/services" exact component={ServiceHome} />
          <Route path="/requestdelivery" exact component={RequestDelivery} />
          <Route path="/update" exact component={Update} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
          <Route path="/recover" exact component={GetRecoverCode} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/updatepassword" exact component={ChangePassword} />
          <Route path="/requestdesign" exact component={RequestDesign} />
          <Route path="/paymnentinfo" exact component={PaymentInfo} />
	  <Route path="/requestrepair" exact component={RequestRepair} />
	  <Route path="/purchusetable" exact component={PurchuseTable} />
          <Route path="/requestrepair" exact component={RequestRepair} />
          <Route path="/del" exact component={DeliveryRequestsFromCustomer} />
          <Route path="/designtable" exact component={DesignTable} />
          <Route path="/AssignDriver" exact component={AssignDriver} />
          <Route path="/DeliveredItems" exact component={DeliveredItems} />
          <Route path="/DeliveryCancellRequest" exact component={DeliveryCancellRequest} />
          <Route path="/DeliveryDriver" exact component={DeliveryDriver} />
          <Route path="/adminlogin" exact component={AdminLogin} />
          <Route path="/dashboard" exact component={DashBoard} />
	  <Route path="/Rhome" exact component={Rentjewelries} />
          <Route path="/RentPayment" exact component = {Rentpay} />
          <Route path="/updateR-Status" exact component = {rentStauts} />
          <Route path="/rentHome" exact component = {mainfirstPage} />
          <Route path="/rentHome2" exact component = {earstuds} />
          <Route path="/TotalPay" exact component = {totPayone} />
          <Route path="/Myrentals" exact component = {myrentals} />
          <Route path="/updateTable" exact component = {updatetable} />
          <Route path="/MonthlyRentals" exact component = {myRreport} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
