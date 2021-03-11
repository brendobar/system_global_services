import React, { Component } from 'react'

export default class AgentCard extends Component {
    render() {
        return (
            <div id="card">
		        <img className="agent-img" src={this.props.image}/>
		        <div id="textbox">
		            <p className="agent-title">{this.props.name} <br></br><span className="agent-position">{this.props.position}</span></p>
					<p className="agent-description">{this.props.description}</p>
		        </div>
		    </div>
        )
    }
}

