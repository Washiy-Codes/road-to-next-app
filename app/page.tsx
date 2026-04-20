import Link from "next/link"
import { PATHS } from "@/constants/paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-9 pt-16">
      <div >
       <h1 className="text-3xl font-bold tracking-tight">Homepage</h1> <br />
       <p className="text-xl text-black-600 text-muted-foreground" >Your place to start</p>
      </div>
      <div className="flex flex-1 flex-col items-center">
       <Link href={PATHS.TICKETS} className="underline">Go to Tickets</Link>
      </div>
      
    </div>
  )
}

export default HomePage