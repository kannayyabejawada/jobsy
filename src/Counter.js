import React,{Component} from 'react';
class Counter extends Component{
    constructor(){
        super();
        this.state={
            countMin:10,
            countSec:60
        }
    }
     change = ()=>{
        this.setState(
            {countSec:this.state.countSec-1}
            )
        if(this.state.countSec==0){
            this.setState(
                {
                    countSec:59,
                    countMin:this.state.countMin-1
                }
            )
        }
    }
    componentDidMount(){
        this.count=setInterval(this.change,1000);
    }
    render(){
        return (
            <>
                <h1>COUNTER</h1>
                <h2>{this.state.countMin}:{this.state.countSec}</h2>
            </>
        );
    }
}
export default Counter;
