import React from "react"

const EventComponent = () =>{

    // type inference not defined ahead of time, so type inference is only defined inside our jsx when called directly inline
    // error message because of type inference system, typescript is always trying to figure out our types
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
    }
    const onDragStart =(event:React.DragEvent<HTMLDivElement> ) =>{
        console.log(event)
    }
    return <div>
        <input type="text" onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
}

export default EventComponent