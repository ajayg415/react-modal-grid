import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Row from './Row';

const Grid = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      setData([...res.data, ...res.data, ...res.data])
    });
  },[]);

  return (
    <div className="grid-container">
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Sn. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i)=>{
            return <Row row={obj} key={i}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;