import React, { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'

import Sidebar from './partials/Sidebar'
import Header from './partials/Header'
// import LinkCard from '../Dashboard/LinkCard'
import UrlDashboard from '../Components/MyLinks'
import UrlShortenerForm from '../Components/UrlShortenerForm'
import Analytics from '../Components/Analytics'


const Dashboard = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
     <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
           
            {/* <Path /> */}
            <Routes>
              
              <Route
                    path="/"
                    element={
                        
                            <UrlDashboard />
                        
                    }
                />
                <Route path="/create-url" element={<UrlShortenerForm />} />
                <Route path="/analytics/:short_url" element={<Analytics />} />

            </Routes>
          
            <div className='mt-4'>
            {/* <Footer /> */}
            </div>
            
          </div>
        </main>
      </div>
    </div>
    </>
    
  )
}

export default Dashboard
