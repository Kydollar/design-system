import React from 'react'

export default function Color() {
    return (
        <div className="flex flex-wrap items-center justify-start gap-2">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded inline-flex text-center items-center justify-center">1</div>
            <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded inline-flex text-center items-center justify-center">2</div>
            {/* <div className="bg-secondary w-16 h-16 rounded inline-flex text-center items-center justify-center">3</div>
            <div className="bg-secondary-foreground w-16 h-16 rounded inline-flex text-center items-center justify-center">4</div> */}
        </div>
    )
}
