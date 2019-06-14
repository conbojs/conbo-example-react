import { Context } from 'conbo';

import SaveCommand from '../command/SaveCommand';
import SavedCommand from '../command/SavedCommand';
import NameService from '../service/NameService';

/**
 * Application context used to make property injection, commands and singletons
 * available to your components
 * 
 * @author	Neil Rackett
 */
export default class AppContext extends Context
{
	initialize()
	{
		this.mapCommand('save', SaveCommand)
			.mapCommand('saved', SavedCommand)
			.mapSingleton('nameService', NameService)
			;
	}
}
