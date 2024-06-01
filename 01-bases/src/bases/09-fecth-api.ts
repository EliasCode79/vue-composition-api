const apiKey = 'ZsvDWspQk3I4PbiqRRem51KjtMgSVYo6';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
	.then((res) => res.json())
	.then(({ data }) => {
		console.log({ data });
	})
	.catch((error) => console.log(error));
