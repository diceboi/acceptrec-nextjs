import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function fetchAndParseXMLData(url) {
  try {
    const response = await axios.get(url);
    const xmlData = response.data;
    const parsedData = await parseStringPromise(xmlData);
    return parsedData;
  } catch (error) {
    console.error('Error fetching or parsing XML data:', error);
    return null;
  }
}