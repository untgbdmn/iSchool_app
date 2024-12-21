import HeaderPage from '@/layouts/header-page'
import MainLayouts from '@/layouts/main-layout'
import React from 'react'

export const metadata = {
    title: 'Daftar Kelas - iSchool',
    description: 'List semua kelas',
}

export default function Page() {
  return (
    <MainLayouts>
        <HeaderPage title="Daftar Kelas" useBread useParent parent='master-data' isPage='Daftar Kelas'/>

        <div className="card">
            adad
        </div>
    </MainLayouts>
  )
}
