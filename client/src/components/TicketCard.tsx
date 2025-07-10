// components/TicketCard.jsx
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
  textColor,
  tagColor,
  tagTextColor,
}: TicketCardProps) => {
  const navigate = useNavigate()
  return (
    <div
      className={`relative rounded-xl p-4 shadow-lg w-full sm:w-[300px] h-full ${bgColor} text-white`}
    >
      {/* Tag */}
      {tag && (
        <div
          className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold ${tagColor} ${tagTextColor}`}
        >
          {tag}
        </div>
      )}

      {/* Title */}
      <h3 className="text-sm font-bold mb-2 uppercase">{title}</h3>
      <p className="text-xs text-blue-200 underline mb-4">View Details</p>

      {/* Features */}
      <ul className="text-xs space-y-2 mb-6">
        {details.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheck className="text-green-400 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Price & Button */}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <button className="bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-gray-200 transition" onClick={()=>navigate('/register')}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
