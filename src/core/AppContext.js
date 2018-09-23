import { Context } from 'conbo';
import SaveCommand from '../controller/SaveCommand';
import NameService from '../service/NameService';

/**
 * Commands and singletons available via the application context
 * @author	Neil Rackett
 */
export default class AppContext extends Context
{
	initialize()
	{
		this.mapCommand('save', SaveCommand)
			.mapSingleton('nameService', NameService)
			;
	}
}
