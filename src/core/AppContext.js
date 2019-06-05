import { Context } from 'conbo';
import SaveCommand from '../command/SaveCommand';
import NameService from '../service/NameService';

/**
 * Application context used to make property injection, commands and singletons
 * available to your components
 * 
 * @author	Neil Rackett
 */
class AppContext extends Context
{
	initialize()
	{
		this.mapCommand('save', SaveCommand)
			.mapSingleton('nameService', NameService)
			;
	}
}

const context = new AppContext();

export default context;
