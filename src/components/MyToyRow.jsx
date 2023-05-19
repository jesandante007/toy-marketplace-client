import React from "react";

const MyToyRow = ({toy, index}) => {
  const { _id, name, category, availableQuantity, price, rating, features, image } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>{rating}</td>
      <td>{features[0].slice(0, 10)}...</td>
      <td>{image.slice(0, 15)}...</td>
      <td>
        <button className="btn btn-outline my-btn btn-sm">Update</button>
      </td>
      <td><button className="btn btn-outline btn-error normal-case btn-sm">Delete</button></td>
    </tr>
  );
};

export default MyToyRow;
