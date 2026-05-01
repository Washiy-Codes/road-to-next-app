import getTickets from "@/features/ticket/queries/get-tickets";
import TicketItem from "@/components/ticketItem";


const TicketList = async () => {
    const tickets = await getTickets();
  return (
    <div className="flex flex-col flex-1 items-center gap-y-8 justify-center animate-fade-in-from-top">
                {tickets.map(({ id, title, content, safeStatus }) => {
                    return (
                        <TicketItem
                        key={id}
                        ticket={{ id, title, content, safeStatus }}
                    />
                    );
                })}
            </div>
  )
}

export default TicketList