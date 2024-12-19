import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

interface MainLayoutsProps {
    children?: React.ReactNode,
}

export default function MainLayouts({children}: MainLayoutsProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-gray-100">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
