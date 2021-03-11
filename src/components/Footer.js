import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"

export default class Footer extends Component {
    render() {
        return (
                <footer>
                    <div className="footer-content">
                        <p className="footer-text">© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="up-btn"
                        >
                            <FontAwesomeIcon icon={faChevronUp} size={"3x"} color={"white"} />
                        </Link>
                    </div>
                    
                </footer>
        )
    }
}
