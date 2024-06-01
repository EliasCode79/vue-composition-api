import axios from 'axios';
import type { GIFResponse } from '../interfaces/gif.response';

const apiKey = 'ZsvDWspQk3I4PbiqRRem51KjtMgSVYo6';

export const giphyApi = axios.create({
	baseURL: 'https://api.giphy.com/v1/gifs',
	params: {
		api_key: apiKey,
	},
});

// giphyApi
// 	.get<GIFResponse>('/random')
// 	.then((resp) => console.log(resp.data.data.images.downsized.url))
// 	.catch((error) => console.log(error));
