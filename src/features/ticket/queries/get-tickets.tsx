import Data from "@/data";
import { Ticket } from "@/features/ticket/components/type";

const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(
      Data.map((ticket) => ({
        ...ticket,
        safeStatus: ticket.status as Ticket["safeStatus"],
      }))
    );
  });   
};

export default getTickets;