import React, { Component } from 'react';
import logo from './logo.svg';
import './AppView.css';
import { DataEvent, bindAll } from 'conbo';

export default class AppView extends Component 
{
	constructor(props) 
	{
		super(props);

		this.state = {};

		/**
		 * Injected service
		 * @type NameService
		 */
		this.nameService = undefined;

		/** 
		 * ConboJS context and property injector
		 * @type conbo.Context 
		 */
		this.ctx = props.context;
		this.ctx.injectSingletons(this);
		
		this.nameService.loadName().then(result =>
		{
			this.setState({name:result.name});
		});

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
		this.ctx.dispatchEvent(new DataEvent('save', this.state));
	}
}
