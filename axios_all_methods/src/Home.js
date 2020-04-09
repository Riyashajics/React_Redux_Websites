import React,{Component} from 'react';
import axios from 'axios'

class Home extends Component{
    constructor(props){
        super(props)

        this.state={
            homeState:""
        }
    }

   /*componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            this.setState({
                homeState:data
            } ,()=>{
                console.log(this.state.homeState)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }*/

    postData(){
        const data={
            "userId":101,
            "id":101,
            "title":"aaa",
            "body":"qwertyuiopad dfjl cvbnmm"
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    updateData(){

        const data={
        "userId":"102",
        "id":"102",
        "title":"bbb",
        "body":"hgvjhchjdbckjdckd bcdkjbcdkjbckdjcb bucbdkjckjcbi"
        }
        axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
        .then((data)=>{
            console.log(data);

        })
        .catch((err)=>{
            console.log(err);
        })

    }
    deleteData(){
        const data={
            "userId":"102",
            "id":"102",
            "title":"bbb",
            "body":"hgvjhchjdbckjdckd bcdkjbcdkjbckdjcb bucbdkjckjcbi"
            }
            axios.delete('https://jsonplaceholder.typicode.com/posts/1',data)
            .then((data)=>{
                console.log(data);
    
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    

    render(){
        return(
            <div>
            <h1>HOME PAGE</h1>
            <p>Welcome to axios Demo</p>
            <button onClick={this.postData}>SUBMIT</button>
            <button onClick={this.updateData}>UPDATE</button>
            <button onClick={this.deleteData}>DELETE</button>
            </div>
        )
    }

}
export default Home;
