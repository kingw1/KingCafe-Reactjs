import React from 'react'
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'

const NotFound = () => {
    return (
        <div>
            <Header/>
            <div className="container col-md-8 text-center">
                <h1 style={{fontSize: 120}}>404</h1>
                <h2>Not Found</h2>
                <p className="title mt-5 mb-5">
                    Sorry, not found your request.
                </p>
            </div>
            <Footer company="King Company"/>
        </div>
    )
}

export default NotFound