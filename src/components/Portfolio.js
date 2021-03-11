import React, { Component, useState } from 'react'
import { Button } from "react-bootstrap"
import { Grid } from '@material-ui/core';

import img1 from "../static/img-1.png"
import img2 from "../static/img-2.png"
import img3 from "../static/img-3.png"
import img4 from "../static/img-4.png"
import img5 from "../static/img-5.png"
import img6 from "../static/img-6.png"


var allItems = [
    {
        id: "1",
        image: img1,
        filter: 'web'
    },
    {
        id: "2",
        image: img2,
        filter: 'web'
    },
    {
        id: "3",
        image: img3,
        filter: 'graphic'
    },
    {
        id: "4",
        image: img4,
        filter: 'flat'
    },
    {
        id: "5",
        image: img5,
        filter: 'flat'
    },
    {
        id: "6",
        image: img6,
        filter: 'graphic'
    },
    {
        id: "7",
        image: img1,
        filter: 'web'
    },
    {
        id: "8",
        image: img2,
        filter: 'web'
    }
];


export default class Portfolio extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: allItems
        };
    }

    filterButton(filter) {
        var newItems = [];
        for (let obj of allItems) {
            if (obj.filter == filter) {         
                newItems.push(obj);
            } else if (filter == "all") {
                newItems = allItems.slice()
            }
        }
        this.setState({items: newItems})
    }


    render() {
        return (
            <div id="portfolio">
                <div className="title">
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div>

                </div>
                <div className="filter">
                    <Button onClick={this.filterButton.bind(this, "all")}>All</Button>
                    <Button onClick={this.filterButton.bind(this, "web")}>WEB DESIGN</Button>
                    <Button onClick={this.filterButton.bind(this, "graphic")}>GRAPHIC DESIGN</Button>
                    <Button onClick={this.filterButton.bind(this, "flat")}>FLAT DESIGN</Button>
                </div>
                <div className="items">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={8}>
                                {this.state.items.map((value) => (
                                    <Grid key={value} item >
                                        <a className="item-img"><img src={value.image}></img></a>
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

