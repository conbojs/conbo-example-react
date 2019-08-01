import React, { Component } from 'react';
import context from '../context';
import { DataEvent, bindAll } from 'conbo';

/**
 * Input view
 * @author	Neil Rackett
 */
export default class InputView extends Component
{
	transientName;

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
		this.transientName = name;
		context.dispatchEvent(new DataEvent('nameChange', {name}));
	}

	resetHandler(event)
	{
		let { name } = this.state;
		this.transientName = name;
		context.dispatchEvent(new DataEvent('nameChange', {name}));
	}

	save(event)
	{
		let name = this.transientName;
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
				&nbsp;<button type="reset" onClick={this.resetHandler}>Reset</button>
			</form>
		);
	}
}
