import { Separator } from './ui/separator'

type HeadingProps = {
    title: string;
    description: string;
}
const Heading = ({title, description}: HeadingProps) => {
  return (
    <>
        <div className="flex flex-col items-start mx-2.5">
         <h1 className="text-3xl font-bold tracking-tight mt-16">{title}</h1>
         <p className="text-xl text-black-600 text-bold">{description}</p>
        </div>
        <Separator className="mb-4 bg-gray-400 h-0.5"/>
    </>
  )
}

export default Heading