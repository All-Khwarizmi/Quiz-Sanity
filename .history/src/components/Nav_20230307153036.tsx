import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className='h-10 w-screen relative top-0 bg-white text-black'>
        <div className='h-full'>
          <ul className='flex space-x-3 pl-3 font-bold text-xl alig '>
            <li>Home</li>
            <li>API</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav