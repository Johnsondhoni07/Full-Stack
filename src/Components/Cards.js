import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todoAction } from "../store/todoslice";

const Cards = () => {
  const data = useSelector((stat) => stat.todo.todo);
  const dispatch = useDispatch()
  // console.log(data);
  // let id = data.map((e)=>e.Id)
  // console.log(id);
  // const DeleteHandler = () => {
  // }

  return (
    <div className='container '>
        {data.map((e, i) => (
      <div className="card mb-2" key={i} style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          
            <h3 > {e.Item} </h3>

          <button onClick= {()=> dispatch(todoAction.remove(e.Id) )} >delete</button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cards;
