import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/todoslice";
import Swal from "sweetalert2";
const Inputbar = () => {
  const [Input, SetInput] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    SetInput(e.target.value);
  };
  const onClickHandler = () => {
    if(Input){
      dispatch(
        todoAction.add({
          Item : Input,
          Id : Date.now(),
        })
      );
      Swal.fire({
        title: 'Added',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      SetInput('')
    }else{
      Swal.fire(
        'Field is empty',
        'question'
      )
    }
  };

  return (
    <div>
      <div className='row'>
        <div className="container mt-5 mb-5">
          <div className="col-md-9 float-end ">
            <input type="text" value={Input} onChange={onChangeHandler} />
            <button type="submit" onClick={onClickHandler} className="m-3">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputbar;
