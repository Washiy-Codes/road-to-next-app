export type Status = "OPEN" | "IN_PROGRESS" | "DONE";


type Ticket = {
    id: string;
    title: string;
    content: string;
    status: Status;
};
export type { Ticket };