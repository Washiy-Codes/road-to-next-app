import Link from "next/link";
import clsx from "clsx";
import Data from "@/data";
import { PATHS } from "@/constants/paths";
const Tickets =() => {
    return (
        <div className="flex flex-1 flex-col gap-y-9 pt-16">
            <div>
             <h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1> <br />
             <p className="text-xl text-black-600 text-muted-foreground" >View all your tickets</p>
            </div>
            <div className="flex flex-col items-center gap-y-8 justify-center">
             {Data.map(({id,title, content,status}: { id: number; title: string; content: string; status:string}) => (
                <div key={id} className="w-full max-w-105 p-4 border border-black-100 rounded">
                     <h1 className="font-semibold">{title}</h1>
                     <h2 className={clsx("text-2xl, truncate", {
                        "line-through": status === "DONE"
                     })}>{content}</h2>
                     <Link key={id} href={PATHS.TICKET_DETAILS(id)} className="underline text-bold text-xl p-1">view</Link>
                </div> 
            ))}
            </div>
        </div>
    );
};

export default Tickets; 

