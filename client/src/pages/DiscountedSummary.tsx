import Stepper from "../components/Stepper";
import bgImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

const DiscountedSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Stepper currentStep={5} />

          <div className="bg-white rounded-xl shadow-lg mt-6 overflow-hidden">
            <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white text-lg font-semibold px-4 py-3 rounded-t-xl">
              Registration Summary
            </div>

            <div className="p-6 space-y-6 text-gray-800">

              <div className="border border-[#D4EED8] rounded-md p-4 bg-[#F2FBF5]">
                <div className="flex justify-between text-sm font-medium">
                  <span>PREMIUM TICKET x 2</span>
                  <span className="text-right text-green-700">
                    FREE 0.16{" "}
                    <span className="text-xs text-green-600">
                      -15% Incl. 19% VAT
                    </span>
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 p-4 rounded-md bg-gray-50 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm bg-gray-100"
                />
                <button className="bg-gradient-to-r from-[#000000] to-[#9F1413] text-white px-5 py-2 rounded-md text-sm font-semibold">
                  APPLY
                </button>
              </div>

              <div className="border border-green-300 rounded-md bg-[#F2FBF5] p-4">
                <div className="flex justify-between items-center">
                  <input
                    value="CITEXIS"
                    disabled
                    className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-md text-sm w-full mr-2"
                  />
                  <button className="text-red-600 border border-red-600 px-4 py-1 rounded-md text-sm font-bold hover:bg-red-50">
                    REMOVE
                  </button>
                </div>

                <div className="mt-4 text-sm text-green-700 space-y-1">
                  <p>
                    Promo code <strong>“CITEXIS”</strong> applied successfully! Applied to 2 lowest-priced tickets!
                  </p>
                  <p>
                    <strong>Promo code applied:</strong>{" "}
                    <span className="text-green-800 font-semibold">CITEXIS</span>
                  </p>
                  <p>
                    <strong>Promo code applied:</strong>{" "}
                    <span className="text-green-800 font-semibold">15% (EUR 0.06 incl. VAT)</span>
                  </p>
                  <p>
                    <strong>Applied to:</strong>{" "}
                    <a href="#" className="text-green-800 underline">2 lowest-priced tickets</a>
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-sm font-medium">
                <span>Student Ticket Access On Day 3 Only</span>
                <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
              </div>

              <div className="text-right font-bold text-lg mt-4">
                <div className="text-gray-400 line-through text-sm">EUR 300</div>
                <div className="text-black text-xl">
                  EUR 150{" "}
                  <span className="text-sm text-gray-600 font-normal">Incl. 19% VAT</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 shrink-0" />
                  <span>
                    I have read and accept the{" "}
                    <a href="#" className="text-red-600 font-semibold underline">terms and conditions</a>,{" "}
                    <a href="#" className="text-red-600 font-semibold underline">Privacy Policy</a>, and consent that attendees under the age of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only, and students above 16 and below 18 can attend only if accompanied by school or faculty member.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 shrink-0" />
                  <span>
                    I hereby consent the use of my data by the organiser, exhibitors and sponsors of DWTC & KAOUN International to delivering services and for marketing purposes. I am aware that I can object to the sending of newsletters at any time.
                  </span>
                </label>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] text-white px-6 py-2 rounded hover:opacity-90 font-semibold"
                  onClick={()=>navigate('/promocode')}
                >
                  PREVIOUS
                </button>
                <button
                  className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-6 py-2 rounded hover:opacity-90 font-semibold"
                  onClick={() => navigate("/success")}
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

export default DiscountedSummary;
