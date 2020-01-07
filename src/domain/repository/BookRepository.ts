import { ApiManager } from '../api/ApiManeger'

export class BookRepository {

    apiManger: ApiManager
    constructor(apiManger) {
        this.apiManger = apiManger
    }

    // getting data from apiManeger and sending data back to viewModel
    async getData() {
        try {
            const response = await this.apiManger.getData()
            console.log('response in repository', response)
            return response
        } catch (error) {
            throw error
        }
    }
}
