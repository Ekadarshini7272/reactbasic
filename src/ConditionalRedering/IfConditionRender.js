import React from "react";

const IfConditionRender =()=> {
    const data1 = {name: "john", status: "Active"}
    const data2 = {name: "Harry", status: "Inactive"}
    let content; 
    if (data1.status="Active") {
        content = <h3>Hi {data1.name} is active</h3>
    } else if (data2.status="Active") {
        content = <h3>Hi {data2.name} is active</h3>
    } else {
       content = <h3>No User is found for Active</h3>
    }
    return(
       <div>
         <h1>If Statement conditional rendering</h1>
         {content}
       </div>
    );
};
export default IfConditionRender;