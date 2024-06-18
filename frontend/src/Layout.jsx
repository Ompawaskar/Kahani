import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Toaster } from "@/components/ui/toaster"

function Layout() {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
        </>
    )
}

export default Layout
