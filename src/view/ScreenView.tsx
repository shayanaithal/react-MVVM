import React from 'react'
import { DependencyInjector } from '../domain/dependencyinjector'
import { ComponentBase } from 'resub'
import { ScreenState, ScreenViewModel } from '../viewModel/ScreeViewModel'

export default class App extends ComponentBase<any, ScreenState> {

    viewModel: ScreenViewModel

    constructor(props) {
        super(props)
        this.viewModel = DependencyInjector.default().provideScreenViewModel()
    }

    componentDidMount() {

        this.viewModel.getData()
    }

    render() {
        return (
            <div>
                {
                    this.state.error ?
                        <div>
                            <h1>Error:{this.state.error}</h1>
                        </div> :
                        <div>
                            <h1>hello</h1>
                            <p>
                                {this.state.name}
                            </p>
                        </div>

                }
            </div>
        )
    }

    _buildState() {
        return this.viewModel.getState()
    }
}
