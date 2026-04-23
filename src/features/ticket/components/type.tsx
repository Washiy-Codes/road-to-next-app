export type Status = "OPEN" | "IN_PROGRESS" | "DONE";


type Ticket = {
    id: number;
    title: string;
    content: string;
    safeStatus: Status;
};
export type { Ticket };