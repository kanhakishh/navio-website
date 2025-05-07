import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[60px] w-full  bg-transparent px-3 py-2 placeholder:text-[#FFFFFF80] text-[12px] sm:text-sm md:text-[clamp(12px,3.5vw,22px)] outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = 'Textarea'

export { Textarea }
