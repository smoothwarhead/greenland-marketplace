import { Link, useLocation } from "react-router";
import { MdHome } from "react-icons/md";
import "./account-header.scss";
import Logo from "../../assets/logos/G-LOGO-CLEAN-DARK.png";

const AccountHeader = () => {
  // console.log(apiUrl);

  // const { pathname } = useLocation();


  return (
    <div className="account-header">
      <div className="account-header">
        <Link to="/">
          <MdHome />
          Home
        </Link>

        {/* {(pathname.includes("provider/") || pathname.includes("patient/")) && (
          <Link to={pathname.includes("provider/") ? "/provider" : "/patient"}>
            Login
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default AccountHeader;
