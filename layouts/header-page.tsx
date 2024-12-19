"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useRouter } from "next/navigation"

interface HeaderPageProps {
    title?: string
    useBread?: boolean
    useParent?: boolean,
    parent?: string
    isPage?: string
}

export default function HeaderPage({ title, useBread, useParent, parent, isPage }: HeaderPageProps) {
    const router = useRouter()
    return (
        <div className='my-2 py-2'>
            <div className="py-2 px-3 bg-white shadow-md border">
                <p className="font-normal" style={{ fontSize: "10px" }}>iSchool Admin Panel</p>
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>

            {useBread && (
                <Breadcrumb className="mt-2 pl-1">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink onClick={() => router.push('/')} className="cursor-pointer">
                                Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {useParent && (
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink onClick={() => router.push(`/${parent}`)} className="cursor-pointer capitalize">
                                        {parent}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </>
                        )}
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="cursor-pointer">{isPage}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            )}
        </div>
    )
}
