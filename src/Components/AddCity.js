import { Fragment, useState } from "react";
import "./AddCity.css";
import axios from "axios";
import swal from "sweetalert";

const AddCity = ({SetRefresh , SetActive}) => {
  const [City, SetCity] = useState([]);

  const OnChangeHandler = (e) => {
    SetCity(e.target.value);
  };
  
  const ListHandler = () => {
    SetActive(true)
  }

  const GridHandler = () => {
    SetActive(false)
  }

  const ONSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          City +
          "&appid=054d16e4792cf28373a50294a1f4e840"
      )
      .then((response) => {
        const con = response.data.sys.country;
        axios
          .post("http://localhost:8000/api/add",{
            city: City,
            country: con,
          })
          .then((res)=>{
      
            if(res.data.status===0){
              
              swal({
                title: "OOPS",
                text: "City Already Exist",
                icon: "error",
                button: "OK",
              });
            }if(res.data.status===1){
              SetRefresh((old)=>[...old+1])
              swal({
                title: "Good job!",
                text: "City is Added!",
                icon: "success",
                button: "Ok",
              });

              document.getElementById("modalinput").value = "";
            }
          })
          
          .catch((err)=>{
            swal({
              title: "OOPS",
              text: err.message,
              icon: "error",
              button: "ok",
            });
          })
      })
      .catch(() => {
        swal({
          title: "OOPS",
          text: "City Not Found",
          icon: "error",
          button: "Ok",
        });
      });
  };

  return (
    <Fragment>
      <div id="addcity">
        <div className="row conatiner-fluid">
          <div className="col-sm-8">
            <div className="row">
              <button id="listbutton" onClick={ListHandler} className="btn ml-2  mt-3">
                List
              </button>
              <button id="gridbutton" onClick={GridHandler} className="btn ml-2 mt-3">
                Grid
              </button>
            </div>
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              id="citybutton"
              className=" btn mt-3"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add City
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ background: "rgb(7, 2, 37)" }}
            >
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "white" }}
                >
                  Add City
                </h5>
                <button
                  type="button"
                  className="close"
                  id="modalclose"
                  data-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={ONSubmitHandler}>
                  <input
                    type="text"
                    onChange={OnChangeHandler}
                    id="modalinput"
                    className="input-group mb-3"
                  />
                  <button
                    type="submit"
                    id="modalbutton"
                    className="btn float-center"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AddCity;
