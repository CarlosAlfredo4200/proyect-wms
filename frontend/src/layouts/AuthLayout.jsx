// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>  <main className='container main-layout'>

              
            <Outlet />
        </main>
        </>
    )
}

export default AuthLayout