import HeaderPage from '@/layouts/header-page'
import MainLayouts from '@/layouts/main-layout'
import React from 'react'

import {
    Card,
} from "@/components/ui/card"


export default function Page() {
    return (
        <MainLayouts>
            <HeaderPage title='Dashboard' />
            <div className="">

                <div className="grid grid-cols-4 gap-x-4">
                    <Card className='p-3 gradient-background-purple shadow-lg'>
                        <h1 className="text-lg font-bold">Jumlah Siswa</h1>
                        <div className="flex flex-row items-center gap-3 justify-between">
                            <p className="text-xs font-semibold">Last Updated at <br />
                                <span className="font-normal">1 Minute ago</span>
                            </p>
                            <div className="text-3xl font-bold">20</div>
                        </div>
                    </Card>

                    <Card className='p-3 gradient-background-purple shadow-lg'>
                        <h1 className="text-lg font-bold">Jumlah Siswa</h1>
                        <div className="flex flex-row items-center gap-3 justify-between">
                            <p className="text-xs font-semibold">Last Updated at <br />
                                <span className="font-normal">1 Minute ago</span>
                            </p>
                            <div className="text-3xl font-bold">20</div>
                        </div>
                    </Card>

                    <Card className='p-3'>
                        <h1 className="text-lg font-bold">Jumlah Siswa</h1>
                        <div className="flex flex-row items-center gap-3 justify-between">
                            <p className="text-xs font-semibold">Last Updated at <br />
                                <span className="font-normal">1 Minute ago</span>
                            </p>
                            <div className="text-3xl font-bold">20</div>
                        </div>
                    </Card>

                    <Card className='p-3'>
                        <h1 className="text-lg font-bold">Jumlah Siswa</h1>
                        <div className="flex flex-row items-center gap-3 justify-between">
                            <p className="text-xs font-semibold">Last Updated at <br />
                                <span className="font-normal">1 Minute ago</span>
                            </p>
                            <div className="text-3xl font-bold">20</div>
                        </div>
                    </Card>

                </div>

            </div>
        </MainLayouts>
    )
}
