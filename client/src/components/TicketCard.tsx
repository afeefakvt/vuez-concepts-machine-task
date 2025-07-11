import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type TicketCardProps = {
  title: string;
  tag?: string;
  details: string[];
  price: string;
  bgColor?: string;
  textColor?: string;
  tagColor?: string;
  tagTextColor?: string;
};

const TicketCard = ({
  title,
  tag,
  details,
  price,
  bgColor,
  tagColor,
  tagTextColor,
}: TicketCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`relative rounded-xl p-4 shadow-lg w-full sm:w-[300px] h-full ${bgColor} text-white 
         ${tag ? "pt-8" : ""} 
    before:content-[''] before:absolute before:top-1/2 before:-left-2 before:-translate-y-1/2 
    before:w-6 before:h-6 before:bg-white before:rounded-full
    after:content-[''] after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2 
    after:w-6 after:h-6 after:bg-white after:rounded-full`}
    >
      {tag && (
        <div
          className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold ${tagColor} ${tagTextColor}`}
        >
          {tag}
        </div>
      )}

      <h3 className="text-sm font-bold mb-2 uppercase">{title}</h3>
      <p className="text-xs text-blue-200 underline mb-4">View Details</p>

      <ul className="text-xs space-y-2 mb-6">
        {details.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheck className="text-green-400 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <button
          className="bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-gray-200 transition"
          onClick={() => navigate("/register")}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
