import Link from 'next/link'
import React from 'react'
import '@/styles/globals.css'
const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-bottom error-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
            <div className="relative ">
              <span className="text-white font-semibold">Oops!</span>
              <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
            </div>
            <h5 className="text-gray-300 font-semibold">Page not found</h5>
            <p className="text-gray-100 mt-2 mb-6 capitalize">we are sorry, but the page you requested was not found</p>
            <Link
              href={'/'}
              className="bg-green-400  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
            >
              Got to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notfound
