import Link from "next/link";
import clsx from "clsx";
import Data from "@/data";
import { PATHS } from "@/constants/paths";


const Tickets =() => {
    const CheckIcon = ()=>{
        return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>)
    }
    const ProgressIcon =()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

        )
    }
    const DocumentIcon = ()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

        )
    }
    const TICKET_ICONS : Record<Status, React.ReactNode>= {
        OPEN:<DocumentIcon />,
        DONE:<CheckIcon />
,       IN_PROGRESS: <ProgressIcon />

    }
    type Status = "DONE" | "OPEN" | "IN_PROGRESS"
    return (
        <div className="flex flex-1 flex-col gap-y-9 pt-16">
            <div>
             <h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1> <br />
             <p className="text-xl text-black-600 text-muted-foreground" >View all your tickets</p>
            </div>
            <div className="flex flex-col items-center gap-y-8 justify-center">
             {Data.map(({id,title, content,status}: { id: number; title: string; content: string; status:String}) => (
                <div key={id} className="w-full max-w-105 p-4 border border-black-100 rounded">
                    <div>{TICKET_ICONS[status]}</div>
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

