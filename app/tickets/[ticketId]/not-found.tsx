import Placeholder from "@/components/Placeholder";
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/constants/paths";

const NotFound = () => {
  return (
    <Placeholder label="Ticket not found" button={
        <Button variant="outline">
       <Link href={PATHS.TICKETS} className="">Go to Tickets</Link>
       </Button>
       } />
  )
}

export default NotFound;