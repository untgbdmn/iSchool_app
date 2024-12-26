"use client"
import React from 'react'
import AuthLayout from '../auth-layout'
import { FaGoogle } from "react-icons/fa";
import { signUpCredentials } from '@/lib/actions';
import { useFormStatus } from 'react-dom';
import ALert from '@/components/alert-message';


export default function Page() {
    const [state, formAction] = React.useActionState(signUpCredentials, null);
    return (
        <AuthLayout isRegister>
            <form action={formAction} className="">
                <div className="px-5 gap-2">

                    {state?.message && (
                        <ALert type='warning' message={state?.message}/>
                    )}

                    <div className="grid grid-rows-4 gap-3">
                        <div className="form-group">
                            <label htmlFor="">Nama</label>
                            <input type="text" name="name" placeholder='Ketikan nama anda...' />
                            {state?.error?.name && <ALert type='warning' message={state?.error?.name} />}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" placeholder='Ketikan email anda...' />
                            {state?.error?.email && <ALert type='warning' message={state?.error?.email} />}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" placeholder='Ketikan password...' />
                            {state?.error?.password && <ALert type='warning' message={state?.error?.password} />}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Nama</label>
                            <input type="password" name="ConfirmPassword" placeholder='Ketikan konfirmasi password...' />
                            {state?.error?.ConfirmPassword && <ALert type='warning' message={state?.error?.ConfirmPassword} />}
                        </div>
                    </div>
                    <Button />
                    <div className="flex flex-col items-center justify-center">
                        <p className="my-3">Atau</p>
                        <button className="flex flex-row items-center justify-center gap-3 w-full border py-1.5 border-gray-500 rounded-md"><FaGoogle />Google</button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}


export function Button() {
    const { pending } = useFormStatus();
    return (
        <button className="w-full flex items-center justify-center bg-violet-700 text-white mt-5 rounded-md py-1.5">{pending ? "Registering..." : "Register"}</button>
    )
}
