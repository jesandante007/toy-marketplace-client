import React from "react";

const ToyRow = ({ toy, index }) => {
  const { _id, name, seller, category, availableQuantity, price } = toy;

  const handleDelete = (_id) => {
    fetch(``, {
        method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  };

  const handleUpdate = (_id) => {};
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{seller}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>
        <button className="btn btn-outline my-btn">Edit</button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error normal-case"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToyRow;
