import axios from 'axios';
import debounce from 'debounce-async';

//I had a problem with the API that you provide me
//When i make a call with Sofia for example into my app i get a set of results
//When i perform the exact same request with Sofia in rentalcars.com i get
//totally different result set, and the difference comes from some cookie
//tj_conf="tj_pref_currency:GBP|tj_pref_lang:en|tjcor:en|"
//So i was pushed to set up this fake cookie to get the real results
axios.defaults.withCredentials = true;

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (120 * 60 * 1000));
const cookieValue = '"tj_pref_currency:GBP|tj_pref_lang:en|tjcor:en|"';
document.cookie = `tj_conf=${cookieValue};path='/';expires=${expirationDate}`;

export const getLocations = debounce(async (numberOfResults, queryString) => {
  const params = new URLSearchParams({
    solrIndex: 'fts_en',
    solrRows: numberOfResults,
    solrTerm: queryString
  });
  try {
    //There is no need of https://cors.io? because of the proxy in webpack-dev-server
    //To see its configuration you can have a look on webpack.config.js
    const res = await axios.get(`/FTSAutocomplete.do?${params.toString()}`);
    const results = res.data.results.docs;
    //This is not the right response for not found, should return 404 not 200
    if (results[0] && results[0].name === 'No results found')
      throw new Error('No results found');

    return res.data.results.docs;
  } catch (err) {
    throw err;
  }
}, 400);
