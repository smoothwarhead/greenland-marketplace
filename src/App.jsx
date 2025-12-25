import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./layout/Layout";
import Products from "./pages/products/Products";
import Commissions from "./pages/commissions/Commissions";
import Wallet from "./pages/wallet/Wallet";
import Sales from "./pages/sales/Sales";
import AccountLayout from "./layout/AccountLayout";
import SignIn from "./pages/account/SignIn";
import Signup from "./pages/account/Signup";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Help from "./pages/help/Help";
// import Home from "./pages/home/Home";
// import Layout from "./layouts/Layout";
// import About from "./pages/about/About";
// import OurBusiness from "./pages/business/OurBusiness";

function App() {
 


  return (
    <div className="container">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<LandingPage />} />

            <Route path='account' element={<AccountLayout />}>
              <Route path="/account/sign-in-as-agent" element={<SignIn />} />
              <Route path="/account/become-an-agent" element={<Signup />} />

            </Route>


            {/* Private routes */}
            <Route path='dashboard' element={<ProtectedRoute><Layout /></ProtectedRoute> }>
              <Route index element={ <Dashboard /> } />
              <Route path="/dashboard/product-marketplace" element={<Products />} />
              <Route path="/dashboard/sales" element={<Sales />} />
              <Route path="/dashboard/commissions" element={<Commissions />} />
              <Route path="/dashboard/wallet" element={<Wallet />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/help" element={<Help />} />


            </Route>
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
