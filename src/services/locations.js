import axios from 'axios';
import debounce from 'debounce-async';

axios.defaults.withCredentials = true;

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (120 * 60 * 1000));
const cookieValue = '"tj_pref_currency:BGN|tj_pref_lang:en|tjcor:bg|"';
document.cookie = `tj_conf=${cookieValue};path='/';expires=${expirationDate}`;

export const getLocations = debounce(async (numberOfResults, queryString) => {
  const params = new URLSearchParams({
    solrIndex: 'fts_en',
    solrRows: numberOfResults,
    solrTerm: queryString
  });
  try {
    const res = await axios.get(`/FTSAutocomplete.do?${params.toString()}`);
    return res.data.results.docs;
  } catch (err) {
    throw err;
  }
}, 400);
