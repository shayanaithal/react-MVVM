import { ApiManager } from '../api/apiManeger'

export class RepoData {

    apiManger: ApiManager
    constructor(apiManger) {
        this.apiManger = apiManger
    }

    async getData() {
        const response = await this.apiManger.getData()
        console.log('response in repository', response)
        return response
    }
}
