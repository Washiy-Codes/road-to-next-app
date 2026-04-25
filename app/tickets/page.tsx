import Heading from "@/components/Heading";
import TicketItem from "@/components/ticketItem";
import { Status } from "@/features/ticket/components/type";
import getTickets from "@/features/ticket/queries/get-tickets";

const isStatus = (value: string): value is Status =>
    value === "OPEN" || value === "DONE" || value === "IN_PROGRESS";


const Tickets = async () => {
    const tickets = await getTickets();
    /* const [tickets, setTickets] = useState<Data[]>([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const data = await getTickets();
            setTickets(data);
        }
        fetchTickets();
    }, []); */

    return (
        <div className="flex flex-1 flex-col gap-y-9">
            <Heading title="Tickets" description="View all your tickets" />
            <div className="flex flex-col flex-1 items-center gap-y-8 justify-center">
                {tickets.map(({ id, title, content, status }) => {
                    const safeStatus: Status = isStatus(status) ? status : "OPEN";
                    return (
                        <TicketItem
                        key={id}
                        ticket={{ id, title, content, safeStatus }}
                    />
                    );
                })}
            </div>
        </div>
    );
};

export default Tickets;

