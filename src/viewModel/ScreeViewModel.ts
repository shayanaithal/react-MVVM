import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'

export interface ScreenState {
    name: string,
    error?: Error
}

@AutoSubscribeStore
export class ScreenViewModel extends StoreBase {

    private bookRepository
    private state: ScreenState

    constructor(bookRepository) {
        super()
        this.bookRepository = bookRepository
        this.state = this.defaultState()
    }

    defaultState() {
        return {
            name: ''
        }
    }

    @autoSubscribe
    getState() {
        return this.state
    }

    setState(newState) {
        this.state = { ...newState }
        this.trigger()
    }

    set(key, value) {
        const newState = { ...this.state }
        newState[key] = value
        this.setState(newState)

    }

    // geting data from bookrepository and setting to this state
    async getData() {

        try {
            const data = await this.bookRepository.getData()
            console.log('data in vm', data)
            this.setState({
                ...this.state,
                name: data
            })
        } catch (error) {
            this.setState({
                ...this.state,
                error: error.msg
            })
        }

    }

}
