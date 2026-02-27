function TasksList({ tasks }) {
  // if (tasks.length === 0) {
  //   return <p className="text-3xl text-red-400">Empty</p>;
  // }

  return (
    <div>
      <h3 className="text-4xl text-amber-400 mb-3">List of Tasks</h3>

      {tasks.length === 0 ? (
       <img width="200px" src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-empty-cartoon-box-image_1252284.jpg" alt="" />
      ) : (
        tasks.map((taskObj, index) => (
          <p className="text-2xl" key={index}>
            {taskObj.taskName}
          </p>
        ))
      )}
    </div>
  );
}

export default TasksList;

//if tasks list empty then "empty" else iterate the list
// condition ? empty : iterate
