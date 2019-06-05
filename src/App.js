import './App.css';

import React, { Component } from 'react';
import logo from './logo.svg';
import { DataEvent, bindAll, assign } from 'conbo';
import context from './core/AppContext';

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
		
		this.nameService
			.loadName()
			.then(result => this.setState(assign({}, result)))
			;

		/**
		 * Binds all class functions to the class instance so that they run in the correct scope
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
				<p className="App-intro">
					My name is
					&nbsp;<input type="text" defaultValue={this.state.name} onChange={this.changeHandler} />
					&nbsp;<button onClick={this.save}>Save</button>
				</p>
			</div>
		);
	}

	changeHandler(event)
	{
		this.setState({name:event.target.value});
	}

	save()
	{
		context.dispatchEvent(new DataEvent('save', this.state));
	}
}
