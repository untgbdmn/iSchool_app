import React from 'react'
import AuthLayout from '../auth-layout'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';

export default function page() {
    return (
        <AuthLayout isLogin>
            <div className="pt-32">
                <div className="flex flex-col mb-10">
                    <div className="form-group px-3 my-1.5">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" placeholder='Ketikan email anda...' />
                    </div>
                    <div className="form-group px-3 my-1.5">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder='Ketikan password anda...' />
                    </div>
                    <div className="flex flex-row items-center justify-between px-3">
                        <div className="">Ingat saya</div>
                        <div className="">Lupa Password</div>
                    </div>
                </div>
                <button className="w-full bg-violet-700 text-white py-1.5 flex items-center justify-center rounded-md">Login</button>
                <button className="flex flex-row items-center justify-center gap-3 w-full border py-1.5 border-gray-500 rounded-md mt-2"><FaGoogle />Google</button>

                <h1 className="my-1 w-full text-center text-sm">Belum Punya Akun? <Link href="register" className='text-violet-600'>Daftar Disini!</Link></h1>
            </div>
        </AuthLayout>
    )
}
