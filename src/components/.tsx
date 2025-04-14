import * as React from "react"

import { cn } from "@/lib/utils"

const Dialog = React.forwardRef<HTMLDialogElement, React.HTMLAttributes<HTMLDialogElement>>(
  ({ className, ...props }, ref) => (
    <dialog
      className={cn(
        "bg-background text-foreground shadow-lg rounded-lg w-full max-w-md [&[open]]:animate-in fade-in-0 zoom-in-95 [&[closed]]:animate-out fade-out-0 zoom-out-95 [&[closed]]:duration-75",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Dialog.displayName = "Dialog"

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof React.Fragment>,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <React.Fragment ref={ref} {...props}>
    {children}
  </React.Fragment>
))
DialogTrigger.displayName = "DialogTrigger"

const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={cn("grid gap-4", className)} ref={ref} {...props}>
      {children}
    </div>
  ),
)
DialogContent.displayName = "DialogContent"

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} ref={ref} {...props} />
  ),
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      ref={ref}
      {...props}
    />
  ),
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />
  ),
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p className={cn("text-sm text-muted-foreground", className)} ref={ref} {...props} />
  ),
)
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
