import { PATHS } from "@/constants/paths";
import Link from "next/link"; 
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/components/type";
import clsx from "clsx";
import { SquareArrowOutUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "./ui/button";
 

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const { id, title, content, safeStatus } = ticket;

  const detailedButton = <Button variant="outline" size="icon">
            <Link key={`ticket-${id}`} href={PATHS.TICKET_DETAILS(id)}>
                <SquareArrowOutUpRight className="h-3.5 w-3.5"/>
            </Link>
            </Button>
  return (
    <div className={clsx("w-full animate-fade-in-from-top flex gap-x-1", isDetail ? "max-w-145" : "max-w-105")}>
        <Card  key={id} className="w-full my-1.5" >
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2 font-bold text-2xl">
              <span>{TICKET_ICONS[safeStatus]}</span>
                <h1 className="truncate">{title}</h1>
            </CardTitle>
            </CardHeader>
              <CardContent>
                <span className={clsx("whitespace-break-spaces", isDetail ? "line-clamp-none" : "line-clamp-2")}>
                <h2>{content}</h2>
                </span>
                </CardContent>
            </Card> 
            {isDetail? null : <div className="flex items-center flex-col justify-center gap-y-1">
            {detailedButton}
            </div>
            }
             
    </div>
  )
}

export default TicketItem