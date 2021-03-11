import React, { Component } from 'react'
import { Button } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"

export default class Jumbo extends Component {
    render() {
        return (
            <div id="home">
                <Jumbotron>
                    <h1>We Build <span>Brand</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                    <br />
                    <p>
                        <Button className="jumbo-learn-more">LEARN MORE</Button>
                    </p>
                    <br />
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="down-btn"
                    >
                        <FontAwesomeIcon icon={faChevronCircleDown} size={"3x"} color={"white"} />
                    </Link>


                </Jumbotron>
            </div>
        )
    }
}
