import axios from 'axios';


const link = '&key=16022582-a19fdcc5907c59857509aea92&image_type=photo&orientation=horizontal&per_page=12';
const baseURL = 'https://pixabay.com/api/?q='
export const fetchImages = (query = 'duck', page= 1,isLoading) =>
    axios.get(baseURL + query + '&page=' + page + link)

