import Stepper from "../components/Stepper";
import bgImage from "../assets/bg.png"; 
import { useNavigate } from "react-router-dom";

const DiscountedSummary = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Stepper currentStep={5}  />

          <div className="bg-white rounded-xl shadow-lg mt-6 overflow-hidden">
            {/* Header */}
            <div className="bg-green-700 text-white text-lg font-semibold px-4 py-3">
              Registration Summary
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 text-gray-800">

              {/* Ticket Summary */}
              <div className="border border-gray-200 rounded-md p-4 bg-green-50">
                <div className="flex justify-between text-sm font-medium">
                  <span>PREMIUM TICKET x 2</span>
                  <span className="text-right text-green-700">
                    FREE 0.16 <span className="text-xs text-green-600">15% Incl. 19% VAT</span>
                  </span>
                </div>
              </div>

              {/* Promo Code Applied */}
              <div className="border border-green-300 rounded-md bg-green-50 p-4">
                <div className="flex justify-between items-center">
                  <input
                    value="CITEXIS"
                    disabled
                    className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-md text-sm w-full mr-2"
                  />
                  <button className="text-red-600 border border-red-500 hover:bg-red-50 px-4 py-1 rounded-md text-sm">
                    REMOVE
                  </button>
                </div>

                <div className="mt-4 text-sm text-green-700 space-y-1">
                  <p>
                    Promo code <strong>“CITEXIS”</strong> applied successfully! Applied to 2 lowest-priced tickets!
                  </p>
                  <p>
                    <strong>Promo code applied:</strong> CITEXIS
                  </p>
                  <p>
                    <strong>Discount:</strong> 15% (EUR 0.06 incl. VAT)
                  </p>
                  <p>
                    <strong>Applied to:</strong>{" "}
                    <a href="#" className="text-green-800 underline">2 lowest-priced tickets</a>
                  </p>
                </div>
              </div>

              {/* Student Ticket */}
              <div className="flex justify-between text-sm font-medium">
                <span>Student Ticket Access On Day 3 Only</span>
                <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
              </div>

              {/* Total */}
              <div className="text-right font-semibold text-lg mt-4">
                <div className="text-gray-500 line-through">EUR 300</div>
                <div className="text-black">EUR 150 <span className="text-sm text-gray-600">Incl. 19% VAT</span></div>
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-4 text-sm text-gray-700">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I have read and accept the{" "}
                    <a href="#" className="text-red-600 underline">terms and conditions</a>,{" "}
                    <a href="#" className="text-red-600 underline">Privacy Policy</a>, and consent that attendees under the age of 21 will not be admitted...
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I hereby consent to the use of my data by the organiser and sponsors for marketing purposes...
                  </span>
                </label>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">
                  BACK
                </button>
                <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800" onClick={()=>navigate('/success')}>
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

export default DiscountedSummary;
