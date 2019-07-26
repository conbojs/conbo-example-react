import { bindAll } from 'conbine';
import React, { Component } from 'react';
import './App.css';
import context from './context';
import logo from './logo.svg';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

export default class App extends Component 
{
	constructor(props) 
	{
		super(props);

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
		 * Use the injected NameService instance to load the data we need
		 */
		this.nameService.loadName();

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
				<OutputView />
				<InputView />
			</div>
		);
	}
}
