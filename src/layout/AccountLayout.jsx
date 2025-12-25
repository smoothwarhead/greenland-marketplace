
import { Outlet } from 'react-router-dom';
import AccountHeader from '../components/account/AccountHeader';

const AccountLayout = () => {
  return (
    <div className='account-layout'>
       <AccountHeader />

       <div className="main-account-content">
            <Outlet />
       </div>

    </div>
  )
}

export default AccountLayout;