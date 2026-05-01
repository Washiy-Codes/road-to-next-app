"use client"
import Placeholder from "@/components/Placeholder"


const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <Placeholder label={error.message || "An error occurred"} />
    </div>
  )
}

export default Error