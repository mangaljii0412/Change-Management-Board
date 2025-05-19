import React from 'react'
import Navbar from "../components/navbar"
import Sidebar from "../components/Sidebar"
import MainPage from '../components/MainPage'
const Dashboard = () => {
    return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <MainPage />
        </div>
    </div>
    )
}

export default Dashboard

