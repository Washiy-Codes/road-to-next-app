import Link from "next/link";
import Data from "@/data";
import { PATHS } from "@/constants/paths";
const Tickets =() => {  
    return (
        <div>
            <h1>Welcome to the tickets page!</h1>
            {Data.map(({ id, title }: { id: number; title: string }) => (
                <Link key={id} href={PATHS.TICKET_DETAILS(id)}>
                    <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded">
                        {title}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Tickets; 