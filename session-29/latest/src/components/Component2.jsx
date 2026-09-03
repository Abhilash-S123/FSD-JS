import { useState } from "react";

const Component2 = () => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  const arr = [
    { id: 1, userName: "abhilash", place: "varkala", age: 26 },
    { id: 2, userName: "anoop", place: "tvm", age: 24 },
    { id: 3, userName: "rahul", place: "edava", age: 29 },
    { id: 4, userName: "zayan", place: "attingal", age: 21 },
  ];

  const filtereduser = arr.filter((user) =>
    user.userName.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
  );
  return (
    <>
      {/* {arr.map((user) => (
        <div key={user.id}>
          <p>
            {user.userName} {user.place}
          </p>
          <p>{user.age}</p>
        </div>
      ))} */}

      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      <p>{filtereduser.length}</p>

      {filtereduser.length === 0
        ? "no results found"
        : filtereduser.map((user) => (
            <div key={user.id}>
              <h4>{user.userName}</h4>
            </div>
          ))}

      <select value={category} onChange={(e) => setCategory(e.target.value)} name="" id="">
        <option value="all">all</option>
        <option value="fruits">fruits</option>
        <option value="veggies">veggies</option>
      </select>

      <p>{category}</p>
      {/* <input value='allll' type="text" /> */}

      
    </>
  );
};

export default Component2;
