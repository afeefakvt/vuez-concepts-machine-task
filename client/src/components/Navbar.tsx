import { useLocation } from "react-router-dom";
import nav from '../assets/nav.png'
import loginImage from '../assets/login.png'

const Navbar = () => {
  const { pathname } = useLocation();
  const showLogin = pathname === "/register";   
  return (
    <div
         className="w-full bg-no-repeat bg-contain bg-top "
  style={{ backgroundImage: `url(${nav})` ,height: "214px",
}}>
  {showLogin && (
        <img
          src={loginImage}
          alt="Login"
          className="h-10"
        />
      )}
    </div>
  )
}

export default Navbar
