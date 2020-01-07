import { ScreenViewModel } from '../viewModel/screeViewModel'
import { ApiManager } from './api/apiManeger'
import { RepoData } from './repository/dataRepo'

export class Di {
    repo
    api
    constructor() {
        this.api = new ApiManager()
        this.repo = new RepoData(this.api)
    }
    static default() {
        return new Di()
    }

    provideScreenViewModel() {
        return new ScreenViewModel(this.repo)
    }
}
