import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
export interface ScreenState {
    name: string
}
@AutoSubscribeStore
export class ScreenViewModel extends StoreBase {
    repo
    state: ScreenState
    constructor(repo) {
        super()
        this.repo = repo
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

    async getData() {
        const data = await this.repo.getData()
        console.log('data in vm', data)
        this.setState({ ...this.state, name: data })
    }

}
