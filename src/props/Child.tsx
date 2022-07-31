// props we expect to receive

interface ChildProps {
    color:string;
    onClick: ()=> void;

}


export const Child = ({color, onClick}: ChildProps) =>{
    return <div>{color}
    <button onClick={onClick}>Click Me</button></div>
}

// same was React.FunctionComponent
// this way takes the idea of taking in acc the idea of children
// react function component, we might have properties assigned to it like proptypes and contexttypes
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick})=>{
    return <div>{color}
      <button onClick={onClick}>Click Me</button></div>;
}
