import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super()

        this.state = {
            todosArray: []
        }
    }
    updateInputValue(e) {
        if (e.target.value !== '') {
            this.setState(
                {
                todosArray: this.state.todosArray.concat([e.target.value])
                }
            )

        }
    }
    handleDelete = (text)=>{
        let arr =[];
        for(let i =0; i< this.state.todosArray.length ; i++){
            if(this.state.todosArray[i] !== text){
                arr.push(this.state.todosArray[i])
            }
        }
        this.setState({
            todosArray:arr
        })
    }
    render() {
        return (
            <div>
                <input onBlur={(e) => this.updateInputValue(e)} />
                <ul>{this.state.todosArray.map((x, index) =>
                    <li key = {index} >{x}
                        <button onClick={() => this.handleDelete(x)}>X</button>
                    </li>
                )}</ul>

            </div>
        )
    }
}

export default ToDo