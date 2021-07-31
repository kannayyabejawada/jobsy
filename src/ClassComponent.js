import React, { Component } from 'react';
import ChildClassComponent from './ChildClassComponent';
class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: 'kannayya',
        }
        this.state = {
            show: true
        }
    }
    incrementFn = () => {
        console.log('increment count...')
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }
    decrementFn = () => {
        console.log('decrement count...')
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    }
    resetFn = () => {
        console.log('reset count...')
        this.setState(
            {
                count: 0
            }
        )
    }
    hideFn = () => {
        this.setState(
            {
                show: !this.state.show
            }
        )
    }
    display = () => {
        this.setState(
            {

            }
        )
    }
    render() {
        return (
            <>
                <h1>This is class component heading</h1>
                <h1>{this.state.count}</h1>

                <button onClick={this.incrementFn}>Increase</button>
                <button onClick={this.decrementFn}>Decrease</button>
                <button onClick={this.resetFn}>Reset</button>

                {/* <div>
                <button onClick={this.hideFn}>Notification</button>
                {
                    this.state.show?<div>kannayya</div>:null
                }
                
            </div> */}

                <ChildClassComponent name={this.state.name} age={40} city='VIZAG' />

               

                

            </>
        );
    }
}
export default ClassComponent;