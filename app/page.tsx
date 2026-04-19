import Link from "next/link"
import { PATHS } from "@/constants/paths";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Homepage</h1> <br />
      <Link href={PATHS.TICKETS} className="underline">Go to Tickets</Link>
    </div>
  )
}

export default page