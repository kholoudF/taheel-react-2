/* eslint-disable */
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/account/Account';
import CreateTemporaryLicense from 'src/pages/services/temporary-license/CreateTemporaryLicense';
import CreatefinalLicense from 'src/pages/services/final-license/CreateFinalLicense';
import CreateFinalLicenseRenewal from 'src/pages/services/final-license/CreateFinalLicenseRenewal';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
// import Drafts from 'src/pages/Drafts';
import Login from 'src/pages/UserAuthentication/Login/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/UserAuthentication/Registration/Register';
import Settings from 'src/pages/Settings';
import OTPLogin from 'src/pages/UserAuthentication/Login/components/LoginOtp';
import Home from './pages/public/Home';
import About from './pages/public/AboutUs';
import Faq from './pages/public/faq';
import Services from './pages/public/Services';
import ContactUs from './pages/public/ContactUs';
import ForgetPassword from './pages/UserAuthentication/forgetPassword/ForgetPassword';
import CentersDetails from './pages/CentersManagement/components/CentersDetails';
import Centers from './pages/CentersManagement/Centers';
import AddCommissioner from './pages/CentersManagement/components/AddCommissioner';
import CommissionersManagement from './pages/CentersManagement/components/CommissionersManagement';
import DownloadDoc from './pages/UserAuthentication/Login/components/DownloadDoc';
import Orders from './pages/Orders';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: isLoggedIn === "" ? <Login /> : <Navigate to="/app/dashboard" />},
      { path: 'otplogin', element: <OTPLogin /> },
      { path: 'downloadDoc', element: <DownloadDoc /> },
      { path: 'Home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/faq', element: <Faq /> },
      { path: '/services', element: <Services /> },
      { path: '/contactus', element: <ContactUs /> },
      { path: '/forgetpassword', element: <ForgetPassword /> },
      { path: 'register', element: isLoggedIn === "" ? <Register /> : <Navigate to="/app/dashboard" /> },
      { path: '404', element: <NotFound /> },
      {
        path: '/', element: isLoggedIn === "" ? <Navigate to="/home" /> : <Navigate to="/app/dashboard" />,
      },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app',
    element: isLoggedIn !== "" ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'centers', element: <Centers /> },
      { path: 'centersDetails', element: <CentersDetails /> },
      { path: 'AddCommissioner', element: <AddCommissioner /> },
      { path: 'CommissionersManagement', element: <CommissionersManagement /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      // { path: 'drafts', element: <Drafts /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'orders', element: <Orders /> },


      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'services',
    element: isLoggedIn !== "" ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'templicense', element: <CreateTemporaryLicense /> },
      { path: 'finallicense', element: <CreatefinalLicense /> },
      { path: 'updatefinallicenserenewal', element: <CreatefinalLicense /> },
      { path: 'editfinallicense', element: <CreatefinalLicense /> },
      { path: 'finallicenserenewal', element: <CreateFinalLicenseRenewal /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
