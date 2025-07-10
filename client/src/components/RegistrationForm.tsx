import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showPrevious =
    location.pathname === "/register2" || location.pathname === "/register3";

  return (
    <div className="w-full bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold text-green-800 mb-4">
        Registration Information 1
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <input className="border p-2 rounded" placeholder="First name *" />
        <input className="border p-2 rounded" placeholder="Last name *" />

        {/* Country & Region */}
        <select className="border p-2 rounded">
          <option>Please Select</option>
          <option>Nigeria</option>
          <option>India</option>
          <option>USA</option>
        </select>
        <select className="border p-2 rounded">
          <option>Please Select</option>
        </select>

        {/* Email */}
        <input className="border p-2 rounded" placeholder="Email address *" />
        <input
          className="border p-2 rounded"
          placeholder="Confirm Email address *"
        />

        {/* Nationality & Mobile */}
        <select className="border p-2 rounded">
          <option>Nationality</option>
        </select>
        <div className="flex gap-2">
          <select className="border p-2 rounded w-20">
            <option>+234</option>
            <option>+91</option>
            <option>+1</option>
          </select>
          <input
            className="border p-2 rounded flex-1"
            placeholder="Mobile number *"
          />
        </div>

        {/* Company & Job */}
        <input className="border p-2 rounded" placeholder="Company name *" />
        <input className="border p-2 rounded" placeholder="Job title *" />

        {/* Company type & Industry */}
        <select className="border p-2 rounded">
          <option>Company type *</option>
        </select>
        <select className="border p-2 rounded">
          <option>Industry *</option>
        </select>

        {/* Solutions / Products button */}
        <div className="md:col-span-2 text-right">
          <button
            type="button"
            className="bg-red-900 text-white px-4 py-2 text-xs rounded"
          >
            SELECT SOLUTIONS/PRODUCTS
          </button>
        </div>

        {/* Workshops */}
        <div className="md:col-span-2">
          <p className="text-sm font-semibold mb-2">
            Select Workshop (Maximum 6 can Select)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Global Leaders Forum (5 Days)",
              "GITEX Main Stage",
              "Artificial Intelligence & Robotics (5)",
              "Future Health NEW! (2 Days)",
              "Cybersecurity (4 Days)",
              "Future Health NEW! (2 Days)",
              "Digital Cities (3 Days)",
              "Edtech (1 Day)",
              "Energy Transition (1 Day)",
              "Intelligent Connectivity (1 Day)",
              "Intelligent Finance (1 Day)",
              "Future Mobility (1 Day)",
            ].map((label, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        {/* Submit Buttons */}
        <div className="md:col-span-2 flex justify-center gap-x-4 mt-6">
          {showPrevious && (
            <button
              onClick={() =>
                navigate(
                  location.pathname === "/register3"
                    ? "/register2"
                    : "/register"
                )
              }
              type="button"
              className="bg-gradient-to-r from-[#5C2f66] to-[#25102C] text-white px-6 py-2 rounded font-semibold hover:opacity-90"
            >
              PREVIOUS
            </button>
          )}

          <button
            onClick={() => {
              if (location.pathname === "/register") {
                navigate("/register2");
              } else if (location.pathname === "/register2") {
                navigate("/register3");
              } else {
                navigate("/promocode");
              }
            }}
            type="button"
            className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-6 py-2 rounded font-semibold hover:opacity-90"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
