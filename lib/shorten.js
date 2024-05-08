export async function shorten(url){
    const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('url', url);

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '4e4de0ad11mshd09cd6e6bc2d4cap132f8djsn2ad94410bc31',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
    return response.data.result_url
	
} catch (error) {
	console.error(error);
    
}
} 