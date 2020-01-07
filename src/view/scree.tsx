import React from 'react'
import { Di } from '../domain/dependencyinjector'
import { ComponentBase } from 'resub'
import { ScreenState } from '../viewModel/screeViewModel'

export default class App extends ComponentBase<any, ScreenState> {
    viewModel
    constructor(props) {
        super(props)
        this.viewModel = Di.default().provideScreenViewModel()
    }

    componentDidMount() {

        this.viewModel.getData()
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <p>
                    {this.state.name}
                </p>

            </div>
        )
    }

    _buildState() {
        return this.viewModel.getState()
    }
}
