import {Component} from 'react'

interface User {
    name:string;
    age:number;

}

interface UserSearchProps{
    // these two are the same, they just clean things up a bit
    users:User[]
    // users:{
    //     name:string;
    //     age:number;
    // }[]
}

interface UserSearchState {
    name:string;
    // cleaner than the one below this one
    user:User | undefined;
    // user:{name:string; age:number} | undefined;
}
// to associate interface with our component we gotta do the <>
class UserSearch extends Component <UserSearchProps> {

state:UserSearchState = {
    name:'',
    user:undefined

}
onClick =()=>{
    const foundUser = this.props.users.find(user =>{
         return user.name === this.state.name
     })
     this.setState({user: foundUser})
 }

render(){
    const {user, name} = this.state;
    return (<div>User Search
        <input value={name} onChange={e=> this.setState({name: e.target.value})} />
        <button onClick={this.onClick}>Find User</button>
        <div>{user && user.name}
        {user && user.age}</div>
    </div>)
}
}

export default UserSearch