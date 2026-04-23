import { MessageSquareWarning } from "lucide-react";
import { cloneElement, type ReactElement } from "react";

type ElementWithClassName = ReactElement<{ className?: string }>;

type PlaceholderProps = {
  label: string;
  icon?: ElementWithClassName;
  button?: ElementWithClassName;
}

const Placeholder = ({ label, icon = <MessageSquareWarning />, button = <div /> }: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, { className: "w-16 h-16 text-muted-foreground" })}
      <h1 className="text-center text-2xl">{label}</h1>
      {cloneElement(button, { className: "h-10" })}
    </div>
  )
}

export default Placeholder