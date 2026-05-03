import TicketItem from "@/components/ticketItem";
import getTicket from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

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
      notFound()
      
    )
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top pt-16">
      <TicketItem ticket={initialTicket} isDetail={true} /> 
    </div>
  );
}

export default TicketsPage;