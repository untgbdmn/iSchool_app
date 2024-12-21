import React from 'react'
import Logo from "../../assets/icon/logo.svg"
import Image from 'next/image'

interface AuthLayoutProps {
    children: React.ReactNode
    isRegister?: boolean
    isLogin?: boolean
}

export default function AuthLayout({ children, isRegister, isLogin }: AuthLayoutProps) {
    return (
        <div className='grid grid-cols-6 min-h-screen'>
            <div className="col-span-2 shadow-2xl border-r p-3">

                {isRegister && (
                    <div className="my-12 flex items-center justify-center flex-col">
                        <h1 className="text-2xl font-bold text-violet-800">Register</h1>
                        <p className="text-sm">Daftar sekarang untuk akses penuh ke iSchool!</p>
                    </div>
                )}
                {isLogin && (
                    <div className="my-12 flex items-center justify-center flex-col">
                        <h1 className="text-2xl font-bold text-violet-800">Login</h1>
                        <p className="text-sm">Selamat datang kembali! Silakan masuk ke akun Anda!</p>
                    </div>
                )}
                {children}
            </div>
            <div className="bg-violet-50 col-span-4 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center">
                        <Image src={Logo} alt='Logo' className='size-12' />
                        <h1 className="text-3xl font-bold font-sans logo-text">iSchool</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-lg font-semibold mb-5">School App Management</h1>
                        {isRegister && (
                            <p className="text-center px-20 text-sm">Bergabunglah dengan iSchool dengan melakukan registrasi, dan nikmati akses ke berbagai fitur manajemen sekolah yang inovatif, yang akan membantu Anda mengoptimalkan proses belajar mengajar dan meningkatkan efisiensi operasional di institusi pendidikan Anda</p>
                        )}
                        {isLogin && (
                            <p className="text-center px-20 text-sm">
                                Selamat datang kembali di iSchool! Silakan masuk ke akun Anda untuk mengakses berbagai fitur manajemen sekolah yang telah kami sediakan, dan lanjutkan perjalanan Anda dalam menciptakan lingkungan belajar yang lebih baik
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
