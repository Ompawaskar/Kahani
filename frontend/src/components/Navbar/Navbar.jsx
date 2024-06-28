import { useAuthContext } from '@/hooks/useAuthContext'
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const { user } = useAuthContext();
    return (
        <header className="shadow  z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="../../../public/logo3.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    {!user ? <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2"
                        >
                            Sign In
                        </Link>
                    </div> : null }
                    
                    
                </div>
            </nav>
        </header>  
    )
}

export default Navbar
