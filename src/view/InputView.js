import React, { Component } from 'react';
import context from '../context';
import { DataEvent, bindAll } from 'conbine';

/**
 * Input view
 * @author	Neil Rackett
 */
export default class InputView extends Component
{
	currentName;

	constructor(props)
	{
		super(props);

		this.state = {};

		context
			.addEventListener('nameLoaded', this.nameLoadedHandler, this)
			;

		bindAll(this);
	}

	nameLoadedHandler(event)
	{
		this.setState({name: event.data.name});
	}

	inputChangeHandler(event)
	{
		let name = event.target.value;
		this.currentName = name;
		context.dispatchEvent(new DataEvent('nameChange', {name}));
	}

	save(event)
	{
		let name = this.currentName;
		this.setState({name});
		context.dispatchEvent(new DataEvent('nameSave', {name}));
		event.preventDefault();
		return false;
	}

	render()
	{
		return (
			<form className="App-intro">
				My name is
				&nbsp;<input type="text" defaultValue={this.state.name} onChange={this.inputChangeHandler} />
				&nbsp;<button type="submit" onClick={this.save}>Save</button>
			</form>
		);
	}
}
