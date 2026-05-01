import Heading from "@/components/Heading";
import { Suspense } from "react";
import TicketList from "@/features/ticket/components/ticket-list";
import Spinner from "@/components/spinner";

const Tickets = () => {

    return (
        <div className="flex flex-1 flex-col gap-y-1">
            <Heading title="Tickets" description="View all your tickets" />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
};

export default Tickets;

