import TicketCard from "../components/TicketCard"


const ticketData = [
  {
    title: "Visitor 3 Day Access Ticket",
    tag: "EXCLUSIVE",
    details: [
      "Access to Conference Tracks",
      "Access to Networking Lounge",
      "Exhibition Floor Entry",
    ],
    price: "FREE",
    bgColor: "bg-gradient-to-br from-green-700 to-black",
    tagColor: "bg-green-400",
    tagTextColor: "text-white",
  },
  {
    title: "Visitor 3 Day Access Ticket",
    tag: "NEW",
    details: [
      "Full Expo Floor Access",
      "VIP City Lounge Access",
      "Startup Pavilion Entry",
    ],
    price: "USD 49",
    bgColor: "bg-gradient-to-br from-purple-800 to-black",
    tagColor: "bg-red-500",
    tagTextColor: "text-white",
  },
  {
    title: "Visitor 3 Day Access Ticket",
    details: [
      "Access to Tech Demos",
      "Entry to AI Zone",
      "Networking Sessions",
    ],
    price: "FREE",
    bgColor: "bg-gradient-to-br from-blue-800 to-black",
  },
  {
    title: "Visitor 3 Day Access Ticket",
    tag: "HOT",
    details: [
      "Startup Pitch Zone",
      "City Lounge Access",
      "Business Matchmaking",
    ],
    price: "FREE",
    bgColor: "bg-gradient-to-br from-red-800 to-black",
    tagColor: "bg-yellow-400",
    tagTextColor: "text-black",
  },
  {
    title: "Visitor 3 Day Access Ticket",
    details: [
      "Women in Tech Lounge",
      "Tech Stage Access",
      "Blockchain Zone Entry",
    ],
    price: "FREE",
    bgColor: "bg-gradient-to-br from-lime-700 to-black",
  },
  {
    title: "Visitor 3 Day Access Ticket",
    tag: "LIMITED",
    details: [
      "Premium Networking Lounge",
      "Full Conference Access",
      "Mentorship Zone",
    ],
    price: "USD 99",
    bgColor: "bg-gradient-to-br from-indigo-900 to-black",
    tagColor: "bg-white",
    tagTextColor: "text-black",
  },
];


const Ticket = () => {
  return (
         <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {ticketData.map((ticket, idx) => (
            <TicketCard key={idx} {...ticket} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ticket
