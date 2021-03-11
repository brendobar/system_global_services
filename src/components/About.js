import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import AgentCard from "./AgentCard"

import ava1 from "../static/ava-1.jpg"
import ava2 from "../static/ava-2.jpg"
import ava3 from "../static/ava-3.jpg"



var agents = [
    {
    image: ava1,
    name:'Melannie Doe',
    position:'Project Manager',
    description:'Ut wisi enim ad minim veniam, quis nostrud exerci tation'
    },
    {
    image: ava2,
    name:'Jhonnie Doe',
    position:'Graphic Designer',
    description:'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
    image: ava3,
    name:'Daniel Doe',
    position:'Web Designer',
    description:'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo'
    }
    ];


export default class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="title">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="agents">
                    <Grid container  spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={8}>
                            {agents.map((value) => (
                                <Grid key={value} item >
                                    <AgentCard image={value.image} name={value.name} position={value.position} description={value.description}/>
                                </Grid>
                            ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

