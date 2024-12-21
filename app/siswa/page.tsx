import ActionTooltip from '@/components/action-tooltip'
import HeaderPage from '@/layouts/header-page'
import MainLayouts from '@/layouts/main-layout'
import { FaSearch } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'Daftar Siswa - iSchool',
    description: 'List semua siswa',
}

export default function Page() {
    return (
        <MainLayouts>
            <HeaderPage title='Daftar Siswa' />

            <div className="card">
                <div className="card-header">
                    <div className="relative flex items-center w-full">
                        <input id="search" type="text" className='w-full' placeholder='Cari...'/>
                        <FaSearch className='absolute ml-3'/>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <Link href="siswa/create" className="btn btn-primary">Tambah Siswa</Link>
                    </div>

                </div>
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NIS</th>
                                <th>NISN</th>
                                <th>Nama Siswa</th>
                                <th>Email</th>
                                <th>Kelas</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>24674</td>
                                <td>0056875368</td>
                                <td>Karina Sabrina</td>
                                <td>karina@gmail.com</td>
                                <td>XII RPL</td>
                                <td>
                                    <ActionTooltip>
                                        <Link href="/siswa/edit" id="action" className="">Edit</Link>
                                        <a id="action" className="text-red-500">Hapus</a>
                                    </ActionTooltip>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayouts>
    )
}
