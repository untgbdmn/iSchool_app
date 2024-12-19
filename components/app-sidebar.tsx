"use client"

import * as React from "react"
import {
    Command,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { data } from "@/assets/menu/menu"
import Image from "next/image"
import Logo from "../assets/icon/logo.svg"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-12 items-center justify-center rounded-lg">
                                    <Image src={Logo} alt=" " />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold text-2xl">iSchool</span>
                                    <span className="truncate text-xs">App Management</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                {/*  */}
            </SidebarFooter>
        </Sidebar>
    )
}
