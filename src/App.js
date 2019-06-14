import './App.css';

import React, { Component } from 'react';
import logo from './logo.svg';
import { DataEvent, bindAll, assign } from 'conbo';
import context from './context';

export default class App extends Component 
{
	constructor(props) 
	{
		super(props);

		this.state = {name:''};

		/**
		 * Name service will be injected by ConboJS (declared as undefined)
		 * @type NameService
		 */
		this.nameService = undefined;

		/** 
		 * Reference to the application's ConboJS context and property injector
		 * @type conbo.Context 
		 */
		context.inject(this);
		
		/**
		 * Use the injected NameService instance to load the data we need. You might prefer
		 * to do this using a Command via context events to improve decoupling
		 */
		this.nameService
			.loadName()
			.then(result => this.setState(assign({}, result)))
			;

		/**
		 * Binds all class functions to the class instance so that they run in the correct scope,
		 * effectively the same as defining them all using `func = () => {}` arrow function syntax
		 */
		bindAll(this);
	}
	
	render()
	{
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to ConboJS example for React</h1>
				</header>
				<h1>Hello, {this.state.name}!</h1>
				<form className="App-intro">
					My name is
					&nbsp;<input type="text" defaultValue={this.state.name} onChange={this.changeHandler} />
					&nbsp;<button type="submit" onClick={this.save}>Save</button>
				</form>
			</div>
		);
	}

	changeHandler(event)
	{
		this.setState({name:event.target.value});
	}

	save(event)
	{
		context.dispatchEvent(new DataEvent('nameSave', this.state));

		event.preventDefault();
		return false;
	}
}
