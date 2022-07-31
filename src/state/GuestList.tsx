// const GuestList: React.FC = () =>{
//     return <div>Guest List</div>
// }

import { link } from 'fs';
import {useState} from 'react'



const GuestList = () =>{
    // if we put any type of value in useState thats not clear to typescript we gotta be specific with the <>
    const [name, setName] = useState('');
    // tells typescript our guests its going to be an array of strings
    const [guests, setGuests] = useState<string[]>([]);

    const onClick =() =>{
        setName('')
        // always make a copy
        //  if we just try to pass it [name], it will remove all the previous guests of our app so we gotta do it this way
        setGuests([...guests, name])
    }

    return <div><h3>Guest List</h3>

    <ul>
        {guests.map((guest=> <li key={guest}>{guest}</li>))}
    </ul>
    <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value)
    }}/>
    <button onClick={onClick}>Add Guest</button></div>
}
export default GuestList