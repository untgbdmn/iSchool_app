"use client"
import React from 'react'
import { CircleAlert, CircleCheck, CircleX } from 'lucide-react';

interface AlertProps {
    message?: string[] | string | undefined
    type?: 'success' | 'error' | 'warning'

}

export default function ALert({ message, type }: AlertProps) {
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) {
        return null;
    }

    let color = '';
    switch (type) {
        case 'success':
            color = 'bg-green-500 text-white';
            break;
        case 'error':
            color = 'bg-red-500 text-white';
            break;
        case 'warning':
            color = 'bg-yellow-500 text-white';
            break;
        default:
            color = 'bg-gray-500 text-white';
    }

    let title = "";
    switch (type) {
        case 'success':
            title = "Berhasil!";
            break;
        case 'error':
            title = "Gagal!";
            break;
        case 'warning':
            title = "Peringatan!";
            break;
        default:
            title = "Informasi!";
    }

    return (
        <div className={`${
            color
          } absolute top-1 max-w-3xl w-auto right-1 px-4 py-1 flex flex-row items-center gap-3 rounded-md ${
            show ? 'animate-fade-in' : 'animate-fade-out'
          }`}>
            {type == "warning" && <CircleAlert className='size-9 text-white' />}
            {type == "error" && <CircleX className='size-9 text-white' />}
            {type == "success" && <CircleCheck className='size-9 text-white' />}
            <div className="pr-20">
                <h1 className="text-base font-bold">{title}</h1>
                <p className="text-sm">{message || "this is message in alert"}</p>
            </div>
        </div>
    );
}
