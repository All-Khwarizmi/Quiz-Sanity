import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className='h-25 absolute top-0 bg-white text-black'>
        <div className='h-full'>
            <ul className='flex align-center justify-between'>
                <li>Home</li>
                <li>API</li>
                <li>About</li>
            </ul>
        </div>
    </nav>
    
    </>
  )
}

export default Nav