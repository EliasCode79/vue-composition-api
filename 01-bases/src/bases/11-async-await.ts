import type { GIFResponse } from '../interfaces/gif.response';
import { giphyApi } from './10-axios';

// al poner async delante e una funcion lo que hacemos es q esta funciona devuelva un promesa
export const getImage = async () => {
	// para el manejo de errores en async await, utilizamos try para cuando la peticion es existosa
	try {
		// await, lo ponemos antes de la peticion, un ves q se resuelva lo asignamos a resp
		const resp = await giphyApi.get<GIFResponse>('/randwwom');

		// aca enviamos la respuesta, resp
		return resp.data.data.images.downsized.url;
	} catch (error) {
		// utilizamos el catch para cuando la peticion tiene problemas
		// el throw es necesario para indicar el error
		throw 'url no encontrada';
	}
};

getImage()
	.then((url) => console.log(url))
	.catch((error) => console.log(error));
