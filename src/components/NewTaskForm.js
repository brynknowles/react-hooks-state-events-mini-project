import React from "react";

function NewTaskForm() {

  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
