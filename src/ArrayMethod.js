import React, {useState, useEffect} from 'react';
const ArrayMethod = () => {
   const users = [
    { id: 1, name: 'Alice', age: 28, city: 'New York', active: true },
    { id: 2, name: 'Bob', age: 34, city: 'Chicago', active: false },
    { id: 3, name: 'Charlie', age: 22, city: 'San Francisco', active: true },
    { id: 4, name: 'David', age: 19, city: 'Los Angeles', active: false },
    { id: 5, name: 'Eva', age: 45, city: 'Seattle', active: true },
   ];
   const userDisplayData = users.map(user => ({userName: user.name, location: user.city,}));

   const activeUsers = users.filter(user => user.active);

   const userById = users.find(user => user.id === 3);

   const index = users.findIndex(user => user.name === 'Eva');

   const hasUserAbove40 = users.some(user => user.age > 40);

   const allActive = users.every(user => user.active);

   const totalAge = users.reduce((sum, user) => sum + user.age, 0);

   const sortedByAge = [...users].sort((a, b) => a.age - b.age);

   const reversedUsers = [...users].reverse();

   const cities = users.map(user => user.city);
   const hasCheckCity = cities.includes('New York');

   const moreUser = [
    { id: 6, name: 'Frank', age: 29, city: 'Boston', active: true }
   ];
   const allUsers = users.concat(moreUser);

   const firstTwoUser = users.slice(0, 3);

   const removedUsers = [...users];
   removedUsers.splice(2, 1);

   const userActivities = users.flatMap(user => [user.name, user.city]);

    return(
      <>
      <h2>Array Method</h2>
      <div>
        <h3>1. User Display Data (map):</h3>
        <pre>{JSON.stringify(userDisplayData, null, 2)}</pre>
      </div>
      <div>
        <h3>2. Active Users (filter):</h3>
        <pre>{JSON.stringify(activeUsers, null, 2)}</pre>
      </div>
      <div>
        <h3>3. User with ID 3 (find):</h3>
        <pre>{JSON.stringify(userById, null, 2)}</pre>
      </div>
      <div>
        <h3>4. User Display Data (findIndex):</h3>
        <pre>{JSON.stringify(index, null, 2)}</pre>
      </div>
      <div>
        <h3>5. Any user above 40? (some):</h3>
        <pre>{JSON.stringify(hasUserAbove40, null, 2)}</pre>
      </div>
      <div>
        <h3>6. Are all users active? (every):</h3>
        <pre>{JSON.stringify(allActive, null, 2)}</pre>
      </div>
      <div>
        <h3>7. Total Age of All Users (reduce):</h3>
        <pre>{JSON.stringify(totalAge, null, 2)}</pre>
      </div>
      <div>
        <h3>8. Users Sorted by Age (sort):</h3>
        <pre>{JSON.stringify(sortedByAge, null, 2)}</pre>
      </div>
      <div>
        <h3>9. Reversed Users (reverse):</h3>
        <pre>{JSON.stringify(reversedUsers, null, 2)}</pre>
      </div>
      <div>
        <h3>10. Does New York exist in cities? (includes):</h3>
        <pre>{JSON.stringify(hasCheckCity, null, 2)}</pre>
      </div>
      <div>
        <h3>11. User Display Data (concat):</h3>
        <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      </div>
      <div>
        <h3>12. First Two Users (slice):</h3>
        <pre>{JSON.stringify(firstTwoUser, null, 2)}</pre>
      </div>
      <div>
        <h3>13. Users After Removing One (splice):</h3>
        <pre>{JSON.stringify(removedUsers, null, 2)}</pre>
      </div>
      <div>
        <h3>14. User Activities (flatMap):</h3>
        <pre>{JSON.stringify(userActivities, null, 2)}</pre>
      </div>
      </>
    );
};
export default ArrayMethod;