import { Command, DataEvent } from 'conbo';

/**
 * Save name in response to "save" event, e.g. to a server or database
 * @author	Neil Rackett
 */
export default class SaveCommand extends Command
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

		this.context.dispatchEvent(new DataEvent('saved', {name}));
	}
}
