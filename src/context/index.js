import React, { Component } from 'react';
import ConboAppContext from './ConboAppContext';

const context = new ConboAppContext();

export const AppContext = React.createContext();

export class AppContextProvider extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {};
	}

	render()
	{
		const { children } = this.props;

		return (
			<AppContext.Provider value={context}>
				{children}
			</AppContext.Provider>
		);
	}
}

export const AppContextConsumer = AppContext.Consumer;
