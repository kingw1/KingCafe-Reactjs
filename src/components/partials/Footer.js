import React from 'react'

const Footer = (props) => {
    const {company} = props

    return (
        <div className="container-fluid title text-center text-uppercase">
            <hr />
            <span className="text-danger">
                Powered By {company}
            </span>
        </div>
    )
}

export default Footer