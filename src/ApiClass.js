// import React,{component} from 'react';
// class ApiClass extends component{
//     constructor(){
//         this.state={
//             apidata:[],
//         }
//     }
//     // callApi=()=>{
//     //     let api=fetch('https://api.nationalize.io/?name=nathaniel');
//     //     api.then((data)=>{
//     //         return json.data;
//     //     }).then((json)=>{
//     //         console.log(json.country);
//     //         this.setState({
//     //             apidata:json.country
//     //         })
//     //     })
        
//     // }
//     render(){
//         return(
//             <>
//             <button onClick={this.callApi}>Fetch Data</button>
//             <h1>API Data List</h1>
//             {this.state.apidata && this.state.apidata.map((item,index)=>(
//                 <>
//                 <span>{index}.</span>
//                 <span>{item.country_id}</span>
//                 <br/>
//                 </>
//             ))}
//             </>
//         )
//     }
// }
// export default ApiClass;