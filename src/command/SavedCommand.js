import { Command, DataEvent } from 'conbo';

/**
 * Open an alert in response to "saved" event
 * @author	Neil Rackett
 */
export default class SavedCommand extends Command
{
	execute()
	{
		let name = this.event.data.name;

		alert(`Thanks ${name}, your name has been saved!`);
	}
}
