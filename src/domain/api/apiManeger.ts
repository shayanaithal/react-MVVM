import axios from 'axios'

export class ApiManager {
    url = 'http://openlibrary.org/authors/OL1A.json'

    async getData() {
        const response = await axios(this.url)
        console.log('api manger response---', response.data)
        return response.data.personal_name
    }
}
