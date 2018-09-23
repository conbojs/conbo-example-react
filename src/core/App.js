import React from 'react';
import '../view/index.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppView from '../view/AppView';
import { HeadlessApplication } from 'conbo';
import AppContext from './AppContext';

/**
 * Simple HeadlessApplication example of ConboJS-React integration
 * @author	Neil Rackett
 */
export default class App extends HeadlessApplication
{
	declarations()
	{
		this.contextClass = AppContext;
	}

	initialize()
	{
		ReactDOM.render(<AppView context={this.context} />, document.getElementById('root'));
		registerServiceWorker();
	}
}
