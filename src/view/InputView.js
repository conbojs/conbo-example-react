import React, { Component } from 'react';
import { bindAll } from 'conbo';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Input view
 * @author	Neil Rackett
 */
export default class InputView extends Component
{
	static contextType = AppContext;

	transientName;

	constructor(props, context)
	{
		super(props);

		this.state = {};

		context
			.addEventListener(NameEvent.NAME_LOADED, this.nameLoadedHandler, this)
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
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, {name}));
	}

	resetHandler(event)
	{
		let { name } = this.state;
		this.transientName = name;
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, {name}));
	}

	save(event)
	{
		let name = this.transientName;
		this.setState({name});
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVE, {name}));
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
