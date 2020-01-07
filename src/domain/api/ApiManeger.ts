import axios from 'axios'

export class ApiManager {
    url = 'http://openlibrary.org/authors/OL1A.json'

    // making api call here to get book data sending back to repository layer
    async getData() {
        try {
            const response = await axios(this.url)
            console.log('api manger response---', response.data)
            // throw { msg: 'ohhh shit Error' }
            return response.data.personal_name
        } catch (error) {
            throw error
        }
    }
}
