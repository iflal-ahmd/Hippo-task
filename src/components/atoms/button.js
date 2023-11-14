import React from "react";
import { cn } from "../../lib/utils";

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex bg-amber-50 h-10 px-4 py-2 items-center justify-center rounded-md md:text-sm text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
