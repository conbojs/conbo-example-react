import React, { Component } from 'react';
import context from '../context';

/**
 * Output view
 * @author	Neil Rackett
 */
export default class OutputView extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {};

		context
			.addEventListener('nameLoaded', this.nameChangeHandler, this)
			.addEventListener('nameChange', this.nameChangeHandler, this)
			;
	}

	nameChangeHandler(event)
	{
		this.setState({name: event.data.name});
	}

	render()
	{
		return <h1>Hello, {this.state.name}!</h1>
	}
}
