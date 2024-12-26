"use client"
import React from 'react'
import AuthLayout from '../auth-layout'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { signInCredentials } from '@/lib/actions';
import { useFormStatus } from 'react-dom';
import ALert from '@/components/alert-message';

export default function Page() {
    const [state, formAction] = React.useActionState(signInCredentials, null);
    return (
        <AuthLayout isLogin>
            <form action={formAction} className="pt-32">
                <div className="flex flex-col mb-10">
                    {state?.message && (
                        <ALert type='warning' message={state?.message} />
                    )}
                    <div className="form-group px-3 my-1.5">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" placeholder='Ketikan email anda...' />
                        {state?.error?.email && <ALert type='warning' message={state?.error?.email} />}
                    </div>
                    <div className="form-group px-3 my-1.5">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder='Ketikan password anda...' />
                        {state?.error?.password && <ALert type='warning' message={state?.error?.password} />}
                    </div>
                    <div className="flex flex-row items-center justify-between px-3">
                        <div className="">Ingat saya</div>
                        <div className="">Lupa Password</div>
                    </div>
                </div>
                <Button />
                <button className="flex flex-row items-center justify-center gap-3 w-full border py-1.5 border-gray-500 rounded-md mt-2"><FaGoogle />Google</button>

                <h1 className="my-1 w-full text-center text-sm">Belum Punya Akun? <Link href="register" className='text-violet-600'>Daftar Disini!</Link></h1>
            </form>
        </AuthLayout>
    )
}


export function Button() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' className="w-full bg-violet-700 text-white py-1.5 flex items-center justify-center rounded-md">{pending ? "Loading..." : "Login"}</button>
    )
}
