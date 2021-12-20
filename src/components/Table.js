import React from "react";
const Table = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">City</th>
            <th scope="col">Longitude</th>
            <th scope="col"> Latitude</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
          {props.Details.map((s,i)=>(
          <tbody key={i}>
          <tr>
            <th scope="row">{i+1}</th>
            <td>{s.City}</td>
            <td>{s.Longitude}</td>
            <td>{s.Latitude}</td>
            <td>
              <input
                className="btn"
                type="Button"
                id="Header"
                defaultValue="Show Map"
              />
            </td>
          </tr>
          </tbody>))}
      </table>
    </div>
  );
};
export default Table;
