"use client"
import React from 'react'
import AuthLayout from '../auth-layout'
import { FaGoogle } from "react-icons/fa";
import { signUpCredentials } from '@/lib/actions';


export default function Page() {
    const [state, formAction] = React.useActionState(signUpCredentials, null);
    return (
        <AuthLayout isRegister>
            <form action={formAction} className="">
                <div className="px-5 gap-2">

                    <div className="grid grid-rows-4 gap-3">
                        <div className="form-group">
                            <label htmlFor="">Nama</label>
                            <input type="text" name="nama" placeholder='Ketikan nama anda...' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" placeholder='Ketikan email anda...' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" placeholder='Ketikan password...' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Nama</label>
                            <input type="password" name="konfirmasi-password" placeholder='Ketikan konfirmasi password...' />
                        </div>
                    </div>
                    <button className="w-full flex items-center justify-center bg-violet-700 text-white mt-5 rounded-md py-1.5">Register</button>
                    <div className="flex flex-col items-center justify-center">
                        <p className="my-3">Atau</p>
                        <button className="flex flex-row items-center justify-center gap-3 w-full border py-1.5 border-gray-500 rounded-md"><FaGoogle />Google</button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}
