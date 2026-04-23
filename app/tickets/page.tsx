import Data from "@/data";
import Heading from "@/components/Heading";
import TicketItem from "@/components/ticketItem";
import { Status } from "@/features/ticket/components/type";

const isStatus = (value: string): value is Status =>
    value === "OPEN" || value === "DONE" || value === "IN_PROGRESS";


const Tickets = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-9">
            <Heading title="Tickets" description="View all your tickets" />
            <div className="flex flex-col flex-1 items-center gap-y-8 justify-center">
                {Data.map(({ id, title, content, status }) => {
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

