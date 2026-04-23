import { CircleCheck, FileText, PencilLine } from "lucide-react";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "DONE";

const TICKET_ICONS: Record<TicketStatus, React.ReactNode> = {
    OPEN: <FileText />,
    IN_PROGRESS: <PencilLine />,
    DONE: <CircleCheck />,
};

export { TICKET_ICONS };