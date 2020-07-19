import React from 'react'
import Head from 'next/head'
import Nav  from '../components/nav-component'

const About = () => {
   return (
    
        <React.Fragment>
        <Head>
            <title>About</title>
        </Head>
        <Nav/>
        <div className=" w-auto  text-center">
            <h1 className="w-auto text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-center">Macro Compliance Tracker!</h1>
            <p className="w-auto text-xl text-center">
                This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
            </p>
        </div>

        <h1>The value of customKey is: {process.env.customKey}</h1>
        </React.Fragment>
    
    )
}

export default About