import { ScreenViewModel } from '../viewModel/ScreeViewModel'
import { ApiManager } from './api/ApiManeger'
import { BookRepository } from './repository/BookRepository'

export class DependencyInjector {
    private bookRepository
    private apiManager
    static shared: DependencyInjector
    constructor() {
        // Creating ApiManeger refernce 
        this.apiManager = new ApiManager()

        // creating bookrepository refernce by sending apimaneger reference to BookRepository constructor
        this.bookRepository = new BookRepository(this.apiManager)
    }

    // static function to create DependencyInjector reference 
    static default() {
        if (!this.shared) {
            this.shared = new DependencyInjector()
            return this.shared
        }
        return this.shared
    }

    // creating and providing ScreenViewModel by passing BookRepository reference to ScreenViewModel constructor to screenView.tsx
    provideScreenViewModel() {
        return new ScreenViewModel(this.bookRepository)
    }
}
