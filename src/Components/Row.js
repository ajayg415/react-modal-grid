import React from 'react';

const Row = data =>{
  const { row } = data;
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.phone}</td>
      <td>{row.website}</td>
    </tr>
  );
};

export default Row;