import { LocalHash, assign } from 'conbo';
import NameEvent from '../events/NameEvent';

/**
 * Simple model/service that loads and stores a name; in your app, this could
 * be an HttpService, fetch, or local data store for the global application 
 * state.
 * 
 * @author	Neil Rackett
 */
export default class NameService extends LocalHash
{
	name;

	declarations(options)
	{
		assign(options, 
		{
			name: 'NameService',
			source: {name:'Conbo'} // default
		});
	}

	loadName()
	{
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_LOAD));

		// Simulate an async call, e.g. to a web API
		return Promise.resolve(this)
			.then(result =>
			{
				let { name } = this;
				this.context.dispatchEvent(new NameEvent(NameEvent.NAME_LOADED, {name}))
				return result;
			})
			;
	}

	saveName(name)
	{
		this.name = name;

		// Simulate an async call, e.g. to a web API
		return Promise.resolve()
			.then(() =>
			{
				this.context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVED, {name}));
				return this;
			})
			;
	}
}
