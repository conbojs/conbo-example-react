import { Command } from 'conbine';

/**
 * Save name in response to "nameSave" event, e.g. to a server or database
 * @author	Neil Rackett
 */
export default class NameSaveCommand extends Command
{
	declarations()
	{
		/** 
		 * Automatically injected by ConboJS
		 * @type NameService 
		 */
		this.nameService = undefined;
	}

	execute()
	{
		let name = this.event.data.name;
		this.nameService.saveName(name);
	}
}
