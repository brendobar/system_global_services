import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { YMaps, Map, Placemark } from 'react-yandex-maps';






export default class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = { name: '', mail: '', message: '' };

        this.changeValue = this.changeValue.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }


    changeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
          });
      }

    sendForm(e) {
        // your code
        e.preventDefault();
    }



    render() {
        return (
            <div id="contact">
                <div className="title">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <Form onSubmit={this.sendForm}>
                            <Form.Group controlId="little-text">
                                <Form.Control 
                                    type="text" 
                                    value={this.state.name} 
                                    name="name"
                                    onChange={this.changeValue.bind(this)}  
                                    placeholder="Your name" 
                                />

                                <Form.Control 
                                    type="email" 
                                    value={this.state.mail} 
                                    name="mail"
                                    onChange={this.changeValue.bind(this)} 
                                    placeholder="Your email" 
                                />               
                            </Form.Group>
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                value={this.state.message}
                                name="message" 
                                onChange={this.changeValue.bind(this)} 
                                placeholder="Your message" 
                            />
                            <br />
                            <Button className="btn btn-primary btn-large float-right submit-btn" type="submit">SUBMIT</Button>
                        </Form>
                    </div>

                    <div className="contact-map">
                        <YMaps>
                            <p className="contact-map-title"><FontAwesomeIcon icon={faMapMarkerAlt} size={"1x"} color={"black"} /> Bla Bla Company 125009 Moscow, Red Square 1</p>
                            <Map width="80%"
                                state={{
                                    center: [55.798682, 37.695816],
                                    zoom: 11,
                                    behaviors: [],
                                    controls: ['zoomControl'],


                                }}
                                modules={['control.ZoomControl']}
                            >
                                <Placemark geometry={[55.798682, 37.695816]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        )
    }
}

