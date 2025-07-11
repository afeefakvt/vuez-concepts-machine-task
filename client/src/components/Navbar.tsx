// import { useLocation } from "react-router-dom";
import nav from "../assets/nav.png";
// import loginImage from "../assets/login.png";

const Navbar = () => {
  // const { pathname } = useLocation();
  // const showLogin = pathname === "/register";
  return (
    <>
      <div className="w-full h-full">
        <img
          src={nav}
          alt="Footer Background"
          className="w-full h-full object-contain"
        />
      </div>
      {/* <div>
        {showLogin && <img src={loginImage} alt="Login" className="h-10" />}
      </div> */}
    </>
  );
};

export default Navbar;
