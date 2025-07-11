import Stepper from "../components/Stepper";
import bgImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Stepper currentStep={5} />

          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white text-lg font-semibold px-4 py-3 rounded-t-xl">
              Registration Summary
            </div>
            <div className="space-y-4 text-gray-800">
              <div className="flex justify-between mt-2">
                <span className="font-semibold">PREMIUM TICKET x 2</span>
                <span>EUR 40.19</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Student Ticket Access On Day 3 Only
                </span>
                <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
              </div>

              <div className="border border-gray-200 p-4 rounded-md bg-gray-50 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm bg-gray-100"
                />
                <button className="bg-gradient-to-r from-[#9F1413] to-[#000000] text-white px-5 py-2 rounded-md text-sm font-semibold">
                  APPLY
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm text-gray-600">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I have read and accept the{" "}
                    <a href="#" className="text-red-600 underline">
                      terms and conditions
                    </a>
                    ,{" "}
                    <a href="#" className="text-red-600 underline">
                      Privacy Policy
                    </a>
                    , and consent that attendees under the age of 21 will not be
                    admitted and admission to the exhibition is restricted to
                    trade and business professionals only...
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I hereby consent the use of my data by the organiser,
                    exhibitors and sponsors...
                  </span>
                </label>
              </div>

              <div className="mt-6 text-right font-bold text-lg">
                Total: <span className="text-gray-900">EUR 300</span>
                <span className="text-sm text-gray-600 font-normal">
                  Incl. 19% VAT
                </span>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] text-white px-6 py-2 rounded hover:opacity-90 font-semibold"
                  onClick={() => navigate("/register3")}
                >
                  PREVIOUS
                </button>
                <button
                  className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-6 py-2 rounded hover:opacity-90 font-semibold"
                  onClick={() => navigate("/discount")}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
