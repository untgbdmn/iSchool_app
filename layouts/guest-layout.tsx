import Image from 'next/image'
import React from 'react'
import Logo from '../assets/icon/logo.svg'
import Link from 'next/link'

interface GuestLayoutProps {
    children?: React.ReactNode
}

export default function GuestLayout({children}:GuestLayoutProps ) {
  return (
    <div>
        <div className="">
            <div className="card flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={Logo} alt='Logo' className='size-12'/>
                    <p className="text-2xl font-sans font-bold logo-text">iSiman</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <Link href="/login" className='px-5 bg-violet-600 text-white font-semibold py-2 rounded-md'>Login</Link>
                    <Link href="/login" className='px-5 rounded-md border-violet-700 py-2 border-2 text-violet-700'>Register</Link>
                </div>
            </div>
        </div>
        <div className="">{children}</div>
    </div>
  )
}
