import { DataEvent } from 'conbo';

/**
 * Event class used to dispatch name related events
 * @author	Neil Rackett
 */
export default class NameEvent extends DataEvent
{
	static NAME_CHANGE = 'nameChange';
	static NAME_LOAD = 'nameLoad';
	static NAME_LOADED = 'nameLoaded';
	static NAME_SAVE = 'nameSave';
	static NAME_SAVED = 'nameSaved';
}
