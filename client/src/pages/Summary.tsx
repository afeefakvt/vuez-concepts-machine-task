import Stepper from "../components/Stepper";
import bgImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Stepper currentStep={5} />

          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <div className="bg-green-700 text-white text-lg font-semibold rounded-t-md px-4 py-2">
              Registration Summary
            </div>
            <div className="space-y-4 text-gray-800">
              <div className="flex justify-between">
                <span className="font-semibold">PREMIUM TICKET x 2</span>
                <span>EUR 40.19</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Student Ticket Access On Day 3 Only
                </span>
                <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
              </div>

              {/* Promo Code */}
              <div className="mt-6">
                <label className="block text-green-700 font-medium mb-1">
                  Have a promo code?
                </label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700">
                    APPLY
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
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

              {/* Total */}
              <div className="mt-6 text-right font-semibold text-lg">
                Total:{" "}
                <span className="text-gray-900">EUR 300 Incl. 19% VAT</span>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-900">
                  PREVIOUS
                </button>
                <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800" onClick={()=>navigate('/discount')}>
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
