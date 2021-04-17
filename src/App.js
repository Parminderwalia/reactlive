import React, {useState} from "react";


const App= () =>{
  const [inputList,SetInputList] = useState("");
  const [inputAll,SetInputAll] = useState([]);
  const inputTarget = (e) =>{
    SetInputList(e.target.value);
  }
  const listTarget = () =>{
    SetInputAll([...inputAll,inputList]);
    SetInputList('');
  }

  const itemRemove = (id) =>{
    SetInputAll(inputAll.filter( (curEle,index) => id !== index))
    
  }
  
  return (
    <>
      <div className="main_div>">
        <div className="center_div">
          <h1>To-do-app</h1>
          <br/>
          <input type="text" name="rr" onChange={inputTarget} value={inputList}/>
          <button onClick={listTarget}>+</button>
          <ol>
            {inputAll.map( (currEle,index)=>{
              return ( 
                <>
                <li id="index" key="index">{currEle}</li>
                <button onClick={()=>itemRemove(index)}>-</button>
                </>
              )
            })}
            
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;