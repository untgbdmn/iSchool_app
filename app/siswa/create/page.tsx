import HeaderPage from '@/layouts/header-page'
import MainLayouts from '@/layouts/main-layout'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Tambah Siswa - iSchool',
    description: 'Tambah Siswa',
}

export default function page() {
  return (
    <MainLayouts>
        <HeaderPage title='Tambah Siswa' />

        <div className="card">
            <div className="grid grid-cols-3 gap-5">
                <div className="form-group">
                    <label htmlFor="">Nama</label>
                    <input name='nama_siswa' type="text" className="" placeholder='Masukan Nama...'/>
                </div>

                <div className="form-group">
                    <label htmlFor="">NIS</label>
                    <input name="nis" type="number" className="" placeholder='Masukan NIS...'/>
                </div>

                <div className="form-group">
                    <label htmlFor="">NISN</label>
                    <input name="nisn" type="number" className="" placeholder='Masukan NISN...'/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Kelas</label>
                    <select name="kelas_siswa" className="">
                        <option value="">Pilih Kelas</option>
                        <option value="">X MM</option>
                        <option value="">XI MM</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input name="email" type="email" className="" placeholder='Masukan Email...'/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Nomor Telepon</label>
                    <input name="nomor" type="number" className="" placeholder='Masukan Nomor Telepon...'/>
                </div>

                <div className="form-group col-span-2">
                    <label htmlFor="">Alamat</label>
                    <input name="alamat" type="text" className="" placeholder='Masukan Alamat...'/>
                </div>

                <div className="flex flex-row pt-4 justify-end gap-4 items-end">
                    <Link href="/siswa" className='btn btn-secondary'>Batal</Link>
                    <button className='btn btn-primary' type="submit">Simpan</button>
                </div>
            </div>
        </div>
    </MainLayouts>
  )
}
