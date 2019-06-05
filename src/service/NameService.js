import { LocalHash, assign } from "conbo";

/**
 * Simple service that saves and loads a name (could be an HttpService, fetch, etc, in a real app)
 * @author	Neil Rackett
 */
export default class NameService extends LocalHash
{
	declarations(options)
	{
		assign(options, 
		{
			name: 'exampleService',
			source: {name:'Conbo'}
		});
	}

	loadName()
	{
		// Simulate an async call, e.g. to a web API
		return Promise.resolve(this);
	}

	saveName(name)
	{
		this.name = name;
		return Promise.resolve();
	}
}
