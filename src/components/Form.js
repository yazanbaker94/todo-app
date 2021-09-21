
import React, { useContext } from 'react';

import { ListContext } from '../context/list';


function Form() {
  const { handleSubmit, handleChange } = useContext(ListContext);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="todo"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={5}
            type="range"
            min={1}
            max={10}
            name="difficultyLevel"
          />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </div>
  );
}

export default Form;
