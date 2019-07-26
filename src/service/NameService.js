import { LocalHash, assign, DataEvent } from 'conbine';

/**
 * Simple service that saves and loads a name (could be an HttpService, fetch, etc, in a real app)
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
			source: {name:'Conbo'}
		});
	}

	loadName()
	{
		this.context.dispatchEvent(new DataEvent('nameLoad'));

		// Simulate an async call, e.g. to a web API
		return Promise.resolve(this)
			.then(result =>
			{
				let { name } = this;
				this.context.dispatchEvent(new DataEvent('nameLoaded', {name}))
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
				this.context.dispatchEvent(new DataEvent('nameSaved', {name}));
				return this;
			})
			;
	}
}
