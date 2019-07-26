import { Context } from 'conbine';

import NameSaveCommand from '../command/NameSaveCommand';
import NameSavedCommand from '../command/NameSavedCommand';
import NameService from '../service/NameService';

/**
 * This is the application context, which provides you with an event bus and
 * is used to make property injection, commands and singletons available to
 * your components
 * 
 * @author	Neil Rackett
 */
export default class AppContext extends Context
{
	initialize()
	{
		this.mapSingleton('nameService', NameService)

			.mapCommand('nameSave', NameSaveCommand)
			.mapCommand('nameSaved', NameSavedCommand)			
			;
	}
}
