import Image from 'next/image'
import React from 'react'
import Logo from '../assets/icon/logo.svg'

interface GuestLayoutProps {
    children: React.ReactNode
}

export default function GuestLayout({children}:GuestLayoutProps ) {
  return (
    <div>
        <div className="">
            <div className="card">
                <div className="">
                    <Image src={Logo} alt='Logo' className='size-12'/>
                </div>
            </div>
        </div>
        <div className="">{children}</div>
    </div>
  )
}
