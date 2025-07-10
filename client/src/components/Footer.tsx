import nav from '../assets/nav.png'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isTicketPage = location.pathname === "/";
    const navigate = useNavigate()


  return (
   <>
      <div className="w-full h-full">
        <img
          src={nav}
          alt="Footer Background"
          className="w-full h-full object-contain"
        />
      </div>

      {isTicketPage && (
        <div className="w-full bg-gradient-to-r from-[#299D3F] to-[#123F22] py-4 px-6 font-alexandria">
          <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 flex-wrap">
            <div className="text-white text-sm sm:text-base text-right">
              <p>
                Total: <span className="font-bold">EURO 0</span> Incl. 19% VAT
              </p>
              <p className="text-xs ">View Ticket summary</p>
            </div>
            <button className="bg-white text-green-800 font-bold px-5 py-2 rounded hover:bg-gray-100 transition" onClick={()=>navigate('/register')}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </>
    
  )
}

export default Footer
