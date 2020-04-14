import React from 'react'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

const About = () => {
    return (
        <div>
            <Header/>

            <div className="container col-md-5">
                <h3>Welcome all</h3>
                <p className="title text-justify mt-4 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, laborum! Quas quod et quo culpa sapiente libero numquam incidunt ut temporibus distinctio? Aliquam laborum tempora earum. Unde quisquam aspernatur omnis.
                </p>
                <h4 className="text-center text-warning">Mr.King</h4>
            </div>

            <Footer company="King Company"/>
        </div>
    )
}

export default About