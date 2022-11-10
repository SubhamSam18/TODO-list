import React from "react";
import './Todolist.css'
const Todolist = (props) =>{

    return (
    <>
    <div className="todo_style">
        <div className="insideTodo">
            <table>
            <span>
                <tr>
                        <td>
                        {props.text}
                        </td>
                        <td>
                             <button className="delete" onClick={()=>{
                                props.onSelect(props.id);
                                }}>Delete</button>
                        </td>
                </tr>
            </span>
            </table>
            
            
        </div>
        
    </div>
    
    </>);
};

export default Todolist;