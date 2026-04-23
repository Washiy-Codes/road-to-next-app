import Placeholder from "@/components/Placeholder";
import Data from "@/data";
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/constants/paths";

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
    <div className="pt-16">
      <h2>Ticket ID: {initialTicket.id}</h2>
      <h3>Ticket Title: {initialTicket.title}</h3>
      <h3>{initialTicket.content}</h3>

    </div>
  );
}

export default TicketsPage;