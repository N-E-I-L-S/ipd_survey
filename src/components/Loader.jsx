import React from 'react'
import { BarLoader } from 'react-spinners'
export default function Loader() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#212121] text-white">
            <BarLoader color="#ffffff" />
        </div>
    )
}
