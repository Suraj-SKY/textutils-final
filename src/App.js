//! some js stuffs won't work if the website not contain https protocol

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; // imrs is shortcut
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// BrowserRouter as Router --> it means BrowserRouter is renamed as Router

function App() {
    const [mode, setMode] = useState('light');
    // initial state of darkMode is light

    const [alert, setAlert] = useState(null);
    // initial state of alert is null i.e. no alert

    // it will make "alert" an object
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    // const removeBodyClasses = ()=>{
    //     document.body.classList.remove('bg-light');
    //     document.body.classList.remove('bg-dark');
    //     document.body.classList.remove('bg-primary');
    //     document.body.classList.remove('bg-warning');
    //     document.body.classList.remove('bg-danger');
    //     document.body.classList.remove('bg-success');
    // }

    const toggleMode = (cls) => { // cls - class
        // removeBodyClasses();
        // document.body.classList.add('bg-' + cls);

        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark Mode has been enabled", "success");
            // document.title = "TextUtils - Dark Mode";
            // setInterval(() => {
            //     document.title = "TextUtils is amazing";
            // }, 2000);
            // setInterval(() => {
            //     document.title = "I am batman";
            // }, 1500);
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled", "success");
            // document.title = "TextUtils - Light Mode";
        }
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
                    {/* <About /> */}
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode} />} />

                        <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces..." mode={mode} showAlert={showAlert} />} />
                        {/* "exact" will do exact match
                        otherwise by default react will 
                        do partial match 
                        
                        Eg.
                        /about --> will match with /about and /about/anything
                        
                        */}
                    </Routes>

                    {/* new syntax for router in v6

                    <Router>
                        ... any other content ...
                        <Routes>
                            <Route path="/" element={<Home />} />

                            ... any other route ...
                        </Routes>
                        ... any other content ...
                    </Router>

                    */}
                </div>
            </Router>
        </>
    );
}

export default App;
