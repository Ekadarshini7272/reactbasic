import React from "react";

const IfConditionRender = () => {
  // Define an array of data objects
  const data = [
    { id: 1, name: "John Doe", status: "inactive" },
    { id: 2, name: "Jane Smith", status: "active" },
    { id: 3, name: "Alice Johnson", status: "active" },
    { id: 4, name: "Bob Brown", status: "active" },
  ];

  // Use array `find` method to get the first object with active status
//   const activeData = data.find((item) => item.status === "active");
  // Use array `filter` method to get all objects with active status
  const activeData = data.filter((item) => item.status === "active");

  return (
    <div>
      <h1>If Statement Conditional Rendering</h1>
    {/* {activeData? (
        <h2>{activeData.name} is active</h2>
    ) : (
        <h2>No active user is found</h2>
    )} */}
    {/* Use array `find` method to get the first object with active status */}
    {activeData.length > 0 ? (
    activeData.map((item) => (
        <h2 key={item.id}>{item.name} is active</h2>
    ))
    ): (
        <h2>No active data found</h2>
    )}


    </div>
  );
};

export default IfConditionRender;
