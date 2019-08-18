import React, { Component } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';
import { bindAll } from 'conbo';

/**
 * Output view
 * @author	Neil Rackett
 */
export default class OutputView extends Component
{
	static contextType = AppContext;

	constructor(props, context)
	{
		super(props);

		this.state = {};

		bindAll(this);

		context
			.addEventListener(NameEvent.NAME_LOADED, this.nameChangeHandler)
			.addEventListener(NameEvent.NAME_CHANGE, this.nameChangeHandler)
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
