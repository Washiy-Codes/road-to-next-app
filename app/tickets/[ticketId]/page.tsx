import Placeholder from "@/components/Placeholder";
import Data from "@/data";
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/constants/paths";
import TicketItem from "@/components/ticketItem";
type TicketsPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

async function TicketsPage({ params }: TicketsPageProps) {
  const { ticketId } = await params;
  const id = Number(ticketId);

  const initialTicket = Data.find((ticket) => ticket.id === id);

  if (!initialTicket) {
    return (
       <Placeholder label="Ticket not found" button={
      <Button variant="outline">
        <Link href={PATHS.TICKETS} className="">Go to Tickets</Link>
      </Button>
      } />
      
    )
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top pt-16">
      <TicketItem ticket={initialTicket} isDetail={true} /> 
    </div>
  );
}

export default TicketsPage;