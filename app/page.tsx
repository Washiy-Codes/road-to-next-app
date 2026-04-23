import Link from "next/link"
import { PATHS } from "@/constants/paths";
import Heading from "@/components/Heading";
const HomePage = () => {
  return (
    <div>
      <Heading title="Homepage" description="Your place to start" />
      <div className="flex flex-1 flex-col items-center">
       <Link href={PATHS.TICKETS} className="underline">Go to Tickets</Link>
      </div>
      
    </div>
  )
}

export default HomePage