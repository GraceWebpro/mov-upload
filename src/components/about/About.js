import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";


function About({ user, selected }) {
    return (
        <div>
            <h1>This is the about page</h1>
            <Link to="/">Go to home</Link>
        </div>
    )
}

export default About;