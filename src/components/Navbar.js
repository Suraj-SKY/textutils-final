//* for react router dom -> replace "a" and "href" with "Link" and "to"
// otherwise page will reload

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}
                    {/* since it is a JS component so write 
                it in curly brackets
                
                comments are in curly brackets by default from shortcut Ctrl + / */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Method 1 */}
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            {/* Method 2 */}
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>

                    {/* exercise 2 */}
                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('primary') }}></div>
                        <div className="bg-success rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('success') }}></div>
                        <div className="bg-danger rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('danger') }}></div>
                        <div className="bg-warning rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('warning') }}></div>
                        <div className="bg-light rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('light') }}></div>
                        <div className="bg-dark rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('dark') }}></div>
                    </div> */}
                    {/* onclick requires a function 
                        not a function call */}

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => { props.toggleMode(null) }} /> */}
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// proptypes tells the type of props
Navbar.propTypes = { // here first p should be small
    title: PropTypes.string.isRequired, // here first p should be capital
    about: PropTypes.string
};

//notes: Now if anyone sends title anything other than string
// it will throw an error
/* if we add isRequired to any props then it is madandtory to 
send that props otherwise it will throw an error 
This will work if defaultProps is not set

this will throw error if we not set any defaultProps 
and also not sending its value*/

// we can also set default props
/* if we don't pass any values to Navbar then following 
values will be displayed */
Navbar.defaultProps = {
    title: "Default title here",
    about: "About text here"
};
