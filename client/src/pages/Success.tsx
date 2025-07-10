import bgImage from "../assets/bg.png"; // replace with actual image path
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">

      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-2 rounded-t-xl bg-green-700"></div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">THANK YOU!</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Your Registration Has Been Submitted Successfully
          </p>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            A confirmation email with your event details will be sent to you shortly.
            Please check your inbox (and spam folder).
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-green-700 hover:bg-green-800 text-white text-sm px-6 py-2 rounded shadow"
          >
            Return To Homepage
          </button>
        </div>
      </div>

    </div>
  );
};

export default SuccessPage;
