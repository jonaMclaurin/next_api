import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

 const Nav = () => {
    return(
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            
            <ul className="flex">
            <li className="mr-6">
                <Link href="/"> 
                    <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                </Link>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
          </ul>
        </>
    )
}


export default Nav