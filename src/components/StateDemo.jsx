import { useState } from "react";

function StateDemo() {
  //state
  let [counter, setCounter] = useState(10);
  let [marks, setMarks] = useState([1, 2, 3, 4]);
  let [user, setUser] = useState({ email: "test@mail.com", age: 21 });

  const increment = () => {
    setCounter((x) => x + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    //setCounter(counter+1)
  };

  //add marks
  const addMarks = () => {
    setMarks([123, ...marks]);
  };

  //delete a mark
  const deleteMark = (index) => {
    let result = marks.filter((_, i) => i !== index);
    setMarks(result);
  };

  //add a property
  const updateUser = () => {
    setUser({ ...user, city: "hyd" });
  };

  //delete property
  const deleteProperty = () => {
    let { age, ...rest } = user;
    setUser(rest);
  };

  console.log(Object.entries(user));

  //delete a property

  return (
    <div>
      <p className="text-4xl mt-10">Counter : {counter}</p>
      <button onClick={increment} className="bg-blue-300 px-5 py-2 mt-5 me-3">
        +
      </button>

      <h1>Marks</h1>
      {marks.map((m, index) => (
        <p key={index} className="text-4xl">
          {m}
        </p>
      ))}
      <button onClick={addMarks} className="bg-amber-600 px-5 py-2 mt-5 me-3">
        add mark
      </button>
      <button onClick={() => deleteMark(2)} className="bg-amber-600 px-5 py-2 mt-5 me-3">
        delete mark
      </button>

      <h1>User</h1>
      {Object.values(user).map((v, index) => (
        <p key={index}>{v}</p>
      ))}

      <button onClick={updateUser} className="bg-amber-600 px-5 py-2 mt-5 me-3">
        Add property
      </button>
    </div>
  );
}

export default StateDemo;

// arr.filter((element,index)=>{})

//Object.keys()
//Object.values()
//Object.entries()
