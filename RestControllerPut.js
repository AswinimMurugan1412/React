import React from'react';
class RestControllerPut extends React.Component{
    constructor(props){
        super(props);
        this.state={user:[]};
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'PUT',
            body:JSON.stringify({
                id:1,
                title:'foo',
                body:'bar.',
                userId:2
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then (response =>{
            return response.json()
        }).then(json =>{
            this.setState({
                user:json
            });
        });
    }
    render(){
        return (
            <div>
                <p><b>Resource updated in the serve as shown below</b></p>
                <p> Id:{this.state.user.id}</p>
                <p> Title:{this.state.user.title}</p>
                <p> Body:{this.state.user.body}</p>
                <p> UserId:{this.state.user.userId}</p>
            </div>
        )
    }
}
export default RestControllerPut;