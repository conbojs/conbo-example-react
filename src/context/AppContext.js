import { Context } from 'conbo';

import NameSaveCommand from '../command/NameSaveCommand';
import NameSavedCommand from '../command/NameSavedCommand';
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
		this.mapCommand('nameSave', NameSaveCommand)
			.mapCommand('nameSaved', NameSavedCommand)
			.mapSingleton('nameService', NameService)
			;
	}
}
