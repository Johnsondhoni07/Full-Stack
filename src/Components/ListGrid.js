import axios from "axios";
import { useEffect, useState } from "react";
import './ListGrid.css';

const ListGrid = ({ Refresh ,Active }) => {
  const [Temp, SetTemp] = useState([]);
  

  useEffect(() => {
    SetTemp([])
    axios.get("http://127.0.0.1:8000/api/get").then((res) => {
      res.data.map((e) => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              e.City +
              "&appid=054d16e4792cf28373a50294a1f4e840"
          )
          .then((res) => {
            SetTemp((ol) => [
              ...ol,
              {
                City: e.City,
                Country: e.Country,
                Temp: res.data.main.temp,
              },
            ]);
          });
      });
    });
  }, [Refresh]);

  return (
    <div>
      {Active &&
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Temprature</th>
          </tr>
        </thead>
        <tbody>
          {Temp.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.City}</td>
                <td>{e.Country}</td>
                <td>
                  {(Number(e.Temp) - 273).toFixed(2)}
                  <sup>o</sup>C
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
      }

      {!Active &&
      <div id="grid">
      {Temp.map((e, i) => {
        return(
      <div class="card" key={i} >
        <div class="card-body">
       
            
          <h5 class="card-title">{e.City}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{e.Country}</h6>
          <p class="card-text">
          {(Number(e.Temp) - 273).toFixed(2)}<sup>o</sup>C
          </p>
        </div>
      </div>
      )
      }
      )
        }
        </div>}
    </div>
  );
};

export default ListGrid;
