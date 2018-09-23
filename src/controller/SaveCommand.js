import { Command } from 'conbo';

/**
 * Save and display name in response to "hello" event
 * @author	Neil Rackett
 */
export default class SaveCommand extends Command
{
	declarations()
	{
		/** @type NameService */
		this.nameService = undefined;
	}

	execute()
	{
		let name = this.event.data.name;
		this.nameService.saveName(name);

		alert(`Thanks ${name}, your name has been saved!`);
	}
}
