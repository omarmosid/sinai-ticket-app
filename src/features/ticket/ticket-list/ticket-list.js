import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import TicketSingle from "../ticket-single/ticket-single";

const TicketList = () => {
  const { state } = useContext(GlobalContext);
  return (
    <>
      {state.tickets.map((ticket) => {
        return <TicketSingle key={ticket._id} ticket={ticket} />;
      })}
    </>
  );
};

export default TicketList;
