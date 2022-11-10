import './App.css';
import React,{useState} from 'react';
import Todolist from './Todolist';

function App() {

  const [data,setData] = useState("");
  const [val,setVal] = useState([]);
  
  const itemEvent = (event)=>{
    setData(event.target.value);
  };

  const listofItems = ()=>{
    setVal((oldItem)=>{
      return [...oldItem,data];
    })
  };

  const clear = ()=>{
    setVal([]);
  };

  const deleteItems =(id)=>{
    setVal((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  };

  return (
    <div className='main'>
    <div className="main-div">
      <div className="child-div">
        <h1 >To-do List</h1>

        <div className="addItems">
          <input type="text" placeholder="Enter item" onChange={itemEvent}/>
          {/* <i class="fa-sharp fa-solid fa-plus add-btn" title="Add-Item"></i> */}
          <button className="add" onClick={listofItems}>+</button>
        </div>

        <ol className='list'>
          {
            val.map((itemval , index) =>{
            return <Todolist key={index} id={index} text ={itemval} onSelect = {deleteItems}/>
            })
          }
        </ol>


      <button className="clear" onClick={clear}>Clear</button>
      </div>
    </div>
    </div>
  );
}

export default App
