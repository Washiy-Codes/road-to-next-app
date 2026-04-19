import Data from "@/data";

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
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2>Ticket ID: {initialTicket.id}</h2>
      <h3>Ticket Title: {initialTicket.title}</h3>
    </div>
  );
}

export default TicketsPage;