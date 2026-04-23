import Link from "next/link"
import { PATHS } from "@/constants/paths";
import { Button } from './ui/button'
import { House, SquareKanban } from "lucide-react";

const Header = () => {
  return (
    <>
     <nav className="flex justify-between py-2.5 px-5 border-b-2 w-full backdrop-blur-2xl bg-amber-100/95
        fixed left-0 right-0 top-0 z-20
        supports-backdrop-blur:bg-background/60">
        <div>
          <Button variant="outline">
           <House />
           <Link href={PATHS.HOME} >
            <h1 className="text-lg font-semibold">TicketBounty</h1>
           </Link>
          </Button>
        </div>
        <div>
          <Button variant="outline">
            <SquareKanban />
            <Link href={PATHS.TICKETS} className="text-sm underline">
              <h1 className="text-lg font-semibold {buttonVariant({variant: 'default'})}">Tickets</h1>
            </Link>
          </Button>
        </div>
      </nav>
    </>
  )
}

export default Header