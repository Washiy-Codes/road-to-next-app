import Data from "@/data";
import { Ticket } from "@/features/ticket/components/type";

const getTicket = async ({ticketId}: {ticketId: string}): Promise<Ticket | null> => {
    const maybeTicket = Data.find((ticket) => ticket.id === Number(ticketId));
    
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            maybeTicket
              ? { ...maybeTicket, safeStatus: maybeTicket.status as Ticket["safeStatus"] }
              : null
          );
        }, 2000);
    }); 
}

export default getTicket