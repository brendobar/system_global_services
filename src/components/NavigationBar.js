import React, { Component } from 'react'
import { Nav, Navbar, Button } from "react-bootstrap"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"


export default class NavigationBar extends Component {
    render() {
        return (
            <div id="home">
                <Navbar bg="light">
                    <Navbar.Brand href="#home" className="nav-home">
                        <img
                            alt=""
                            src="../b-logo.png"
                            className="d-inline-block align-top"
                        />{' '}
                        <ul>
                            <li>BLA BLA</li>
                            <li>One Page Flat Template</li>
                        </ul>
                    </Navbar.Brand>
                    <Nav className="ml-auto nav-link">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Portfolio</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link> 
                    </Nav>
                    <Button 
                        className="mobile-nav" 
                        onClick={() => {
                            if($(".navbar-nav a").css('display')=="none"){
                                $(".navbar-nav a").addClass("show")
                            }else{
                                $(".navbar-nav a").removeClass("show")
                            }
                    }}><FontAwesomeIcon icon={faBars} size={"3x"} color={"black"} /></Button>
                </Navbar>

            </div>
        )
    }
}
