import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 transition-colors duration-200 rounded-md px-4 py-2",
        className
      )}
      {...props}
    />
  )
}

export { Input }
