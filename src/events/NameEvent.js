import { DataEvent } from 'conbo';

export default class NameEvent extends DataEvent
{
	static NAME_CHANGE = 'nameChange';
	static NAME_LOAD = 'nameLoad';
	static NAME_LOADED = 'nameLoaded';
	static NAME_SAVE = 'nameSave';
	static NAME_SAVED = 'nameSaved';
}


