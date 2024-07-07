import CardTicket from "../shared/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import MostRecentTickets from "../shared/MostRecentTickets";

const Notifications = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Notificaciones</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="145,000"
          text="Total tickets"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Pending tickets"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets in process"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Closed tickets"
        />
      </div>
      <MostRecentTickets />
    </div>
  );
};

export default Notifications;
