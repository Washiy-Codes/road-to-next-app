import type { Status } from "@/features/ticket/components/type";

const Data: { id: number; title: string, status: Status; content: string}[] = [
    { id: 1, 
      title: "Ticket 1", 
      status:"DONE", 
      content: "This is the first ticket"
    },
    
     { 
     id: 2, 
     title: "Ticket 2",
     status: "IN_PROGRESS",
     content: "This is the second ticket",

    },

    { id: 3, 
     title: "Ticket 3",
     status: "OPEN",
     content: "This is the third ticket"
    },
];

export default Data;