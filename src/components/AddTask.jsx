import { useForm } from "react-hook-form";

function AddTask({ addNewTask }) {
  const { register, handleSubmit,reset } = useForm();

  const onFormSubmit = (taskObj) => {
    console.log(taskObj);
    addNewTask(taskObj);
    reset()
  };

  return (
    <div>
      <h3 className="text-4xl text-amber-400 mb-5">Add Task</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <input type="text" {...register("taskName")} className="border px-3 py-2" placeholder="New task name" />
        </div>
        <button className="bg-blue-700 text-lime-100 px-3 py-2 ">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
