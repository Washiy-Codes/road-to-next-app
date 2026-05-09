import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const Tickets: Prisma.TicketCreateInput[]= [
    { 
        title: "Ticket 1", 
        status:"DONE", 
        content: "This is the first ticket from the database"
      },
      
       { 
       
       title: "Ticket 2",
       status: "IN_PROGRESS",
       content: "This is the second ticket from the database",
  
      },
  
      { 
       title: "Ticket 3",
       status: "OPEN",
       content: "This is the third ticket from the database"
      },
];

const seed = async()=>{
    const started = performance.now()
    console.log(`DB started: ${started}`)
    await prisma.ticket.deleteMany()
    await prisma.ticket.createMany({
        data:Tickets,
    })
    const finished = performance.now()
    console.log(`DB finished: ${finished - started}ms`)
}
seed()