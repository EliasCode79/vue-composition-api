import type { GIFResponse } from '../interfaces/gif.response';

const apiKey = 'ZsvDWspQk3I4PbiqRRem51KjtMgSVYo6';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
	.then((res) => res.json())
	.then((body: GIFResponse) => {
		// indicamos q el body un type de GifResponse
		console.log(body.data.url);
	})
	.catch((error) => console.log(error));
