import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { BsThreeDotsVertical } from "react-icons/bs";

interface ActionTooltipProps {
    children: React.ReactNode
}

export default function ActionTooltip({ children }: ActionTooltipProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center justify-center">
                    <BsThreeDotsVertical className='text-xl mt-1' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-20'>
                <div className="flex flex-col p-1">
                    {children}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
