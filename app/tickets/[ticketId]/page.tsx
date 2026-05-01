import Placeholder from "@/components/Placeholder";
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/constants/paths";
import TicketItem from "@/components/ticketItem";
import getTicket from "@/features/ticket/queries/get-ticket";

type TicketsPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

async function TicketsPage({ params }: TicketsPageProps) {
  const { ticketId } = await params;

  const initialTicket = await getTicket({ ticketId });

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